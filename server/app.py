from flask import Flask, request, send_from_directory
from flask_mail import Message, Mail
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


app = Flask(__name__, static_url_path='', static_folder='react-build')
try:
    client = MongoClient("mongodb+srv://admin:ArtfolioPassword123@cluster0.wjcbz.mongodb.net/?retryWrites=true&w=majority", server_api=ServerApi('1'))
    print("DB connected!")
except:
    print("DB not connected...")
mail = Mail

# Need to create email for project
app.config.update(dict(
    DEBUG = 2,
    MAIL_SERVER = 'smtp.aol.com',
    MAIL_PORT = 465,
    MAIL_USE_SSL = True,
    MAIL_DEFAULT_SENDER = 'michaelhmeloy@aol.com',
    MAIL_USERNAME = 'michaelhmeloy@aol.com',
    MAIL_PASSWORD = 'crhlpasjzpounbzv',
))

# Endpoints

@app.route('/', defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')


if __name__ == "__main__":
    app.run(debug=True)