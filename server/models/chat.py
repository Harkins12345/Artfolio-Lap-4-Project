from uuid import uuid4
from time import time


class Chat:

    def __init__(self, db, chatId, initMessage, username):
        self.db = db
        self.username = username
        self.chatId = chatId
        self.initMessage = initMessage
        self.create()

    def create(self):
        print(self.username)

        self.db.chats.insert_one({
            "chatId": self.chatId,
            "message_log": [
                {
                    "msg": self.initMessage,
                    "timestamp": int(time()*1000),
                    "user": self.username
                }
            ]
        })

    @staticmethod
    def find_chat_by_id(db, chatId):
        return db.chats.find_one({"chatId": chatId})
    
    @staticmethod
    def send_message(db, chatId, message, username):
        db.chats.find_one_and_update({"chatId": chatId}, {"$push" : {
            "message_log": {
                "msg": message,
                "timestamp": int(time()*1000),
                "user": username
            }
        }})
    
    @staticmethod
    def delete_log(db, chatId):
        db.chats.find_one_and_delete({'chatId': chatId})
