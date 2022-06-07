from functools import wraps
from flask import jsonify, session

def authenticate(func):
    @wraps(func)
    def decorated_function(*args, **kwargs):
        if session.get('username', None) is None:
            return jsonify({'error': 'Authentication required.'}), 401
        return func(*args, **kwargs)
    return decorated_function