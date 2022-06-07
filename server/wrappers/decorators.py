from functools import wraps
from flask import request, jsonify

def authenticate(func):
    @wraps(func)
    def decorated_function(*args, **kwargs):
        if g.user is None:
            return jsonify({'error': 'Authentication required.'}), 401
        return func(*args, **kwargs)
    return decorated_function