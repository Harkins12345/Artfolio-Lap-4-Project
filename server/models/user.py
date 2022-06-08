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
                "media": []
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
    def update(db, username, data_type, new_data):
        user = User.get_by_username(db, username)

        if data_type == 'email':
            try:
                User.get_by_email(db, new_data)
                raise UserException('Email is already registered')

            except UserException as e:
                if str(e) == 'Email is already registered':
                    raise UserException('Email is already registered')

                db.users.find_one_and_update({'username': username.lower()}, {
                                             '$set': {'email': new_data}})

            except Exception as e:
                print(f'Inner Unexpected error {e}')

        if data_type == 'password':
            db.users.find_one_and_update({'username': username.lower()}, {'$set': {
                                         'password': bcrypt.hashpw(new_data.encode('utf-8'), bcrypt.gensalt())}})

    @staticmethod
    def delete(db, username):
        db.users.find_one_and_delete({'username': username.lower()})

    @staticmethod
    def create_request(db, request_data, username):
        request_id = str(uuid4())

        while db.users.find_one({'request_id': request_id}):
            request_id = str(uuid4())

        request_data['request_id'] = request_id

        db.users.find_and_update({'username': username}, {
            '$push': {'sent_requests': request_data}})
        db.users.find_and_update({'username': request_data['to_username']}, {
            '$push': {'pending_requests': request_data}})

    @staticmethod
    def accept_request(db, request_data, username):
        db.users.find_one_and_update({'username': username}, {
                                 '$pull': {'pending_requests': {'request_id': request_data['request_id']}}})

        db.users.find_one_and_update({'username': username}, {
                                 '$push': {'active_gigs': request_data}})

        db.users.find_one_and_update({'username': request_data['from_username']}, {
                                 '$pull': {'sent_requests': {'request_id': request_data['request_id']}}})

        db.users.find_one_and_update({'username': request_data['from_username']}, {
                                 '$push': {'active_gigs': request_data}})

        Chat(db, request_data['request_id'],
             request_data['description'], request_data['from_username'])

    @staticmethod
    def denie_request(db, request_data, username):
        db.users.find_one_and_update({'username': username}, {
                                 '$pull': {'pending_requests': {'request_id': request_data['request_id']}}})
        
        db.users.find_one_and_update({'username': request_data['from_username']}, {
                                 '$pull': {'sent_requests': {'request_id': request_data['request_id']}}})

    @staticmethod
    def verify_single_sent_request(db, to_username, from_username):
        user = db.users.find_one({'username': from_username})

        if user['sent_requests'] != []:
            for r in user['sent_requests']:
                if r['to_username'] == to_username:
                    return False
        
        return True
    
    @staticmethod
    def upload_portfolio(db, username, file_data):
        db.users.find_one_and_update({'display_username': username}, {'$push' : {'portfolio.media' : file_data}})
