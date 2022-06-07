from flask_session import Session, os, RedisSessionInterface, MemcachedSessionInterface, FileSystemSessionInterface, SqlAlchemySessionInterface, NullSessionInterface
from .mongo_db_interface_fix import FixMongoDBSessionInterface

class SessionFixed(Session):

    def __init__(self, app=None, *args, **kwargs):
        super().__init__(app, *args, **kwargs)
    
    def _get_interface(self, app):
        config = app.config.copy()
        config.setdefault('SESSION_TYPE', 'null')
        config.setdefault('SESSION_PERMANENT', True)
        config.setdefault('SESSION_USE_SIGNER', False)
        config.setdefault('SESSION_KEY_PREFIX', 'session:')
        config.setdefault('SESSION_REDIS', None)
        config.setdefault('SESSION_MEMCACHED', None)
        config.setdefault('SESSION_FILE_DIR',
                          os.path.join(os.getcwd(), 'flask_session'))
        config.setdefault('SESSION_FILE_THRESHOLD', 500)
        config.setdefault('SESSION_FILE_MODE', 384)
        config.setdefault('SESSION_MONGODB', None)
        config.setdefault('SESSION_MONGODB_DB', 'flask_session')
        config.setdefault('SESSION_MONGODB_COLLECT', 'sessions')
        config.setdefault('SESSION_SQLALCHEMY', None)
        config.setdefault('SESSION_SQLALCHEMY_TABLE', 'sessions')

        if config['SESSION_TYPE'] == 'redis':
            session_interface = RedisSessionInterface(
                config['SESSION_REDIS'], config['SESSION_KEY_PREFIX'],
                config['SESSION_USE_SIGNER'], config['SESSION_PERMANENT'])
        elif config['SESSION_TYPE'] == 'memcached':
            session_interface = MemcachedSessionInterface(
                config['SESSION_MEMCACHED'], config['SESSION_KEY_PREFIX'],
                config['SESSION_USE_SIGNER'], config['SESSION_PERMANENT'])
        elif config['SESSION_TYPE'] == 'filesystem':
            session_interface = FileSystemSessionInterface(
                config['SESSION_FILE_DIR'], config['SESSION_FILE_THRESHOLD'],
                config['SESSION_FILE_MODE'], config['SESSION_KEY_PREFIX'],
                config['SESSION_USE_SIGNER'], config['SESSION_PERMANENT'])
        elif config['SESSION_TYPE'] == 'mongodb':
            session_interface = FixMongoDBSessionInterface(
                config['SESSION_MONGODB'],
                config['SESSION_KEY_PREFIX'], config['SESSION_USE_SIGNER'],
                config['SESSION_PERMANENT'])
        elif config['SESSION_TYPE'] == 'sqlalchemy':
            session_interface = SqlAlchemySessionInterface(
                app, config['SESSION_SQLALCHEMY'],
                config['SESSION_SQLALCHEMY_TABLE'],
                config['SESSION_KEY_PREFIX'], config['SESSION_USE_SIGNER'],
                config['SESSION_PERMANENT'])
        else:
            session_interface = NullSessionInterface()

        return session_interface