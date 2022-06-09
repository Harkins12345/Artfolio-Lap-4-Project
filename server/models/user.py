from os import stat
import bcrypt
from uuid import uuid4
from models.chat import Chat


class UserException(Exception):

    def __init__(self, message):
        self.message = message
        super().__init__(message)

    def __str__(self):
        return self.message


class User:

    def __init__(self, db, username, email, password):
        self.db = db
        self.username = username
        self.email = email
        self.password = password
        self.create()

    def create(self):
        if self.db.users.find_one({'email': self.email.lower()}):
            raise UserException(f"Email {self.email} already registered.")

        if self.db.users.find_one({'username': self.username.lower()}):
            raise UserException(f"User {self.username} already exists.")

        if self.username.lower() in ['delete', 'update']:
            raise UserException(f'Username "{self.username}" is invalid.')

        self.db.users.insert_one({
            'email': self.email.lower(),
            'username': self.username.lower(),
            'display_username': self.username,
            'password': bcrypt.hashpw(self.password.encode('utf-8'), bcrypt.gensalt()),
            'portfolio': {
                "description": "",
                "media": [],
                "name": "",
                "price": "",
                "genre": ""
            },
            'pending_requests': [],
            'sent_requests': [],
            'active_gigs': []
        })

    @staticmethod
    def get_by_username(db, username):

        try:
            user = dict(db.users.find_one({'username': username.lower()}))
            return user

        except TypeError:
            raise UserException("User not found.")

    @staticmethod
    def get_by_email(db, email):
        user = db.users.find_one({'email': email.lower()})

        if user:
            return user

        raise UserException("User not found.")

    @staticmethod
    def get_all_users(db):
        users = list(db.users.find({}))

        if len(users) > 0:
            return users

        raise UserException("No users founds.")

    @staticmethod
    def update(db, username, data_types, new_data):

        if 'description' in data_types:
            db.users.find_one_and_update({'username': username.lower()}, {
                                         '$set': {'portfolio.description': new_data['description']}})

        if 'name' in data_types:
            db.users.find_one_and_update({'username': username.lower()}, {
                                         '$set': {'portfolio.name': new_data['name']}})

        if 'genre' in data_types:
            db.users.find_one_and_update({'username': username.lower()}, {
                                         '$set': {'portfolio.genre': new_data['genre']}})

        if 'price' in data_types:
            db.users.find_one_and_update({'username': username.lower()}, {
                                         '$set': {'portfolio.price': new_data['price']}})

        if 'password' in data_types:
            user = User.get_by_username(db, username)
            if bcrypt.checkpw(new_data['old_password'].encode('utf-8'), user['password']):
                db.users.find_one_and_update({'username': username.lower()}, {'$set': {
                    'password': bcrypt.hashpw(new_data['new_password'].encode('utf-8'), bcrypt.gensalt())}})

        if 'email' in data_types:
            try:
                User.get_by_email(db, new_data['email'])
                raise UserException('Email is already registered')

            except UserException as e:
                if str(e) == 'Email is already registered':
                    raise UserException('Email is already registered')

                db.users.find_one_and_update({'username': username.lower()}, {
                                             '$set': {'email': new_data['email']}})

            except Exception as e:
                print(f'Inner Unexpected error {e}')

    @staticmethod
    def delete(db, username):
        db.users.find_one_and_delete({'username': username.lower()})

    @staticmethod
    def create_request(db, request_data, username):
        request_id = str(uuid4())

        while db.users.find_one({'request_id': request_id}):
            request_id = str(uuid4())

        request_data['request_id'] = request_id

        db.users.find_one_and_update({'username': username.lower()}, {
            '$push': {'sent_requests': request_data}})
        db.users.find_one_and_update({'username': request_data['to_username']}, {
            '$push': {'pending_requests': request_data}})

    @staticmethod
    def accept_request(db, request_data, username):

        db.users.find_one_and_update({'username': username.lower()}, {
            '$pull': {'pending_requests': {'request_id': request_data['request_id'].lower()}}})

        db.users.find_one_and_update({'username': username.lower()}, {
            '$push': {'active_gigs': request_data}})

        db.users.find_one_and_update({'username': request_data['from_username'].lower()}, {
            '$pull': {'sent_requests': {'request_id': request_data['request_id'].lower()}}})

        db.users.find_one_and_update({'username': request_data['from_username'].lower()}, {
            '$push': {'active_gigs': request_data}})
        
        Chat(db, request_data['request_id'], request_data['description'], request_data['from_username'])

    @staticmethod
    def denie_request(db, request_data, username):
        db.users.find_one_and_update({'username': username.lower()}, {
            '$pull': {'pending_requests': {'request_id': request_data['request_id']}}})

        db.users.find_one_and_update({'username': request_data['from_username']}, {
            '$pull': {'sent_requests': {'request_id': request_data['request_id']}}})
    
    @staticmethod
    def delete_request(db, request_data, username):
        db.users.find_one_and_update({'username': username.lower()}, {
            '$pull': {'active_gigs': {'request_id': request_data['request_id']}}})

        db.users.find_one_and_update({'username': request_data['from_username']}, {
            '$pull': {'active_gigs': {'request_id': request_data['request_id']}}})
        
        Chat.delete_log(db, request_data['request_id'])

    @staticmethod
    def verify_single_sent_request(db, to_username, from_username):
        user = db.users.find_one({'username': to_username.lower()})

        if user['pending_requests'] != []:
            for r in user['pending_requests']:
                if r['from_username'] == from_username:
                    return False

        return True

    @staticmethod
    def upload_portfolio(db, username, file_data):
        db.users.find_one_and_update({'display_username': username}, {
                                     '$push': {'portfolio.media': file_data}})
