import requests as r
from flask import Flask, request, send_from_directory, jsonify, session
from flask_mail import Message, Mail
from flask_session import Session
from wrappers.pymongoFixed import PyMongoFixed
from wrappers.flask_sessions_fixed import SessionFixed
from wrappers.decorators import authenticate

from models.user import User, UserException, bcrypt

# File path to serve up react-build

app = Flask(__name__, static_url_path='', static_folder='react-build')

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
    SESSION_MONGODB=mongo
))

sess = SessionFixed(app)


# Endpoints

@app.route('/', defaults={'path': ''}, methods=['GET'])
# @authenticate
def serve(path):
    return '''<h1>Home</h1>
    <form method="POST" action="/upload" enctype="multipart/form-data" />
  <input type="file" id="myFile" name="photo_upload"  accept=".jpg,.png,.jpeg" />
  <input type="submit" />
    </form>

    <video id="video1" width="420" controls>
    <source src="/media/mov_bbb.mp4" type="video/mp4">
    Your browser does not support HTML video.
  </video>
    '''
    # return send_from_directory(app.static_folder,'index.html')


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
        return jsonify({'message': 'User created successfully.'}), 201

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
            return jsonify({'message': 'Welcome back ' + user['display_username'] + '.'}), 200
        return jsonify({'error': f'Incorrect login credentials'}), 400

    except UserException as e:
        return jsonify({'error': str(e)}), 400

    except Exception as e:
        print(e)
        return jsonify({'error': 'An unexpected error occurred.'}), 500


@app.route('/users', methods=['GET'])
def get_all_user():
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


@app.route('/users/<username>', methods=['GET'])
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
def user_update():
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

    try:
        User.update(db, username, data_type, new_data)
        return jsonify({'message': f'{data_type.capitalize()} updated successfully.'})

    except UserException as e:
        return jsonify({'error': str(e)}), 400

    except Exception as e:
        return jsonify({'error': 'An unexpected error occurred.'}), 500


@app.route('/users/delete', methods=['POST'])
def user_delete():
    username = request.json.get('username', None)

    if not username:
        return jsonify({'error': 'username is required.'}), 400

    User.delete(db, username)

    return jsonify({'message': f'User {username} deleted successfully.'}), 204


@app.route('/upload', methods=['POST'])
def upload():
    if 'photo_upload' in request.files:
        photo_upload = request.files['photo_upload']
        mongo.save_file(photo_upload.filename, photo_upload)
    return 'File saved', 201


@app.route('/media/<filename>', methods=['GET'])
def get_media(filename):

    return mongo.send_file(filename)


if __name__ == "__main__":
    app.run(debug=True)
