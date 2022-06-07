import bcrypt

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
            'posted_gigs': [
                {
                    "title": "",
                    "description": "",
                    "id": 0
                }
            ],
            'active_chats': []
        })
    
    @staticmethod
    def get_by_username(db, username):
        user = db.users.find_one({'username': username.lower()})

        if user:
            return user
        
        raise UserException("User not found.")
    
    @staticmethod
    def get_by_email(db, email):
        user = db.users.find_one({'email': email.lower()})

        if user:
            return user
        
        raise UserException("User not found.")
    
    @staticmethod
    def get_all_users(db):
        users = db.users.find({})

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
                
                db.users.find_one_and_update({'username': username.lower()}, {'$set': {'email': new_data}})

            except Exception as e:
                print(f'Inner Unexpected error {e}')
        
        elif data_type == 'password':
            db.users.find_one_and_update({'username': username.lower()}, {'$set': {'password': bcrypt.hashpw(new_data.encode('utf-8'), bcrypt.gensalt())}})
    
    @staticmethod
    def delete(db, username):
        db.users.find_one_and_delete({'username' : username.lower()})


