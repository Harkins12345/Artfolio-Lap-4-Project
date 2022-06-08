import requests as r
from datetime import timedelta
from flask import Flask, request, send_file, send_from_directory, jsonify, session
from flask_mail import Message, Mail
from flask_socketio import SocketIO, emit, join_room, leave_room
from wrappers.pymongoFixed import PyMongoFixed
from wrappers.flask_sessions_fixed import SessionFixed
from wrappers.decorators import authenticate
from models.user import User, UserException, bcrypt
from models.chat import Chat, uuid4

# File path to serve up react-build

app = Flask(__name__, static_url_path='', static_folder='dummy-build')

# Set up Email config

app.config.update(dict(
    DEBUG=2,
    MAIL_SERVER='smtp.aol.com',
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_DEFAULT_SENDER='michaelhmeloy@aol.com',
    MAIL_USERNAME='michaelhmeloy@aol.com',
    MAIL_PASSWORD='crhlpasjzpounbzv',
))

mail = Mail(app)

# Set up MongoDB config

app.config.update(dict(
    MONGO_URI="mongodb+srv://admin:ArtfolioPassword123@cluster0.wjcbz.mongodb.net/artfolio?retryWrites=true&w=majority"
))

mongo = PyMongoFixed(app)
db = mongo.db

# Set up Session config

app.config.update(dict(
    SESSION_TYPE="mongodb",
    SESSION_MONGODB=mongo,
    PERMANENT_SESSION_LIFETIME=timedelta(days=14)
))

sess = SessionFixed(app)

# Set up SocketIO

socketio = SocketIO(app)

# Socket Events


@socketio.on('openChat')
def set_up_chat(chatId):
    join_room(chatId)
    Chat(db, chatId, "First Message", session['username'])


@socketio.on('sendMessage')
def display_message(message, chatId):
    Chat.send_message(db, chatId, 'HELLO WORLD', session['username'])
    emit('displayMessage', f'Hello {session["username"]}', to=chatId)


# Endpoints

@app.route('/', defaults={'path': ''}, methods=['GET'])
def serve(path):

    return send_from_directory(app.static_folder, 'index.html')


@app.route('/validate', methods=['POST'])
@authenticate
def validate_user():
    return jsonify({'username': session['username']})


@app.route('/register', methods=['POST'])
def register():
    email = request.json.get('email', None)
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if not email:
        return jsonify({'error': 'Email is required.'}), 400

    if not username:
        return jsonify({'error': 'Username is required.'}), 400

    if not password:
        return jsonify({'error': 'Password is required.'}), 400

    try:
        User(db, username, email, password)
        session['username'] = username
        return jsonify({'username': username}), 201

    except UserException as e:
        return jsonify({'error': str(e)}), 400

    except Exception as e:
        print(e)
        return jsonify({'error': 'An unexpected error occurred.'}), 500


@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not email:
        return jsonify({'error': 'Email is required.'}), 400

    if not password:
        return jsonify({'error': 'Password is required.'}), 400

    try:
        user = User.get_by_email(db, email)
        if bcrypt.checkpw(password.encode('utf-8'), user['password']):
            session['username'] = user['display_username']
            return jsonify({'username': user['display_username']}), 200
        return jsonify({'error': f'Incorrect login credentials'}), 400

    except UserException as e:
        return jsonify({'error': str(e)}), 400

    except Exception as e:
        print(e)
        return jsonify({'error': 'An unexpected error occurred.'}), 500


@app.route('/users', methods=['POST'])
def get_all():
    try:
        users = User.get_all_users(db)
        for user in users:
            del user['active_chats']
        return jsonify(users)

    except UserException as e:
        return jsonify({'error': str(e)}), 404

    except Exception as e:
        print(e)
        return jsonify({'error': 'An unexpected error occurred.'}), 500


@app.route('/users/<username>', methods=['POST'])
def get_user(username):
    try:
        user = User.get_by_username(db, username)
        del user['active_chats']
        return jsonify(user)

    except UserException as e:
        return jsonify({'error': str(e)}), 404

    except Exception as e:
        print(e)
        return jsonify({'error': 'An unexpected error occurred.'}), 500


@app.route('/users/update', methods=['POST'])
@authenticate
def update():
    username = request.json.get('username', None)
    data_type = request.json.get('data_type', None)
    new_data = request.json.get('new_data', None)

    if not username:
        return jsonify({'error': 'username is required.'}), 400

    if not data_type:
        return jsonify({'error': 'data_type is required.'}), 400

    if not new_data:
        return jsonify({'error': 'new_data is required.'}), 400

    if data_type not in ['email', 'password']:
        return jsonify({'error': 'invalid data_type.'}), 400

    if username == session['username']:
        try:
            User.update(db, username, data_type, new_data)
            return jsonify({'message': f'{data_type.capitalize()} updated successfully.'})

        except UserException as e:
            return jsonify({'error': str(e)}), 400

        except Exception as e:
            return jsonify({'error': 'An unexpected error occurred.'}), 500

    return jsonify({'error': 'Authentication required.'}), 401


@app.route('/users/delete', methods=['POST'])
@authenticate
def delete():
    username = request.json.get('username', None)

    if not username:
        return jsonify({'error': 'username is required.'}), 400

    if username == session['username']:
        User.delete(db, username)

        return jsonify({'message': f'User {username} deleted successfully.'}), 204

    return jsonify({'error': 'Authentication required.'}), 401


@app.route('/upload', methods=['POST'])
@authenticate
def upload():
    if 'photo_upload' in request.files:
        photo_upload = request.files['photo_upload']
        mongo.save_file(photo_upload.filename, photo_upload)
        return jsonify({'message': f'File {photo_upload.filename} saved.'}), 201

    return jsonify({'error': 'Bad request.'}), 400


@app.route('/request', methods=['POST'])
@authenticate
def handle_request():
    request_type = request.json.get('request_type', None)
    request_data = request.json.get('request_data', None)

    if request_type and request_data:
        if request_data['from_username'] != session['username']:
            return jsonify({'error': 'Authentication required.'}), 401

        if request_type == 'create_request':
            if User.verify_single_sent_request(db, request_data['to_username'], session['username']):
                User.create_request(db, request_data, session['username'])
                return jsonify({'message': 'Sent request.'})

            return jsonify({'error': f'Already have pending request with user {request_data["to_username"]}.'}), 400

        if request_type == 'accept_request':
            User.accept_request(db, request_data, session['username'])
            return jsonify({'message': 'Request accepted.'})

        if request_type == 'denie_request':
            User.denie_request(db, request_data, session['username'])
            return jsonify({'message': 'Request denied.'})

    return jsonify({'error': 'Bad request.'}), 400


@app.errorhandler(404)
def page_not_found(e):
    return send_from_directory(app.static_folder, 'index.html'), 404


@app.errorhandler(405)
def page_not_found(e):
    return send_from_directory(app.static_folder, 'index.html'), 405


@app.errorhandler(500)
def page_not_found(e):
    return send_from_directory(app.static_folder, 'index.html'), 500


if __name__ == "__main__":
    socketio.run(app)
