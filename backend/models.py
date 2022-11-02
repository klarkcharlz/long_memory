from passlib.apps import custom_app_context as pwd_context
from sqlalchemy import ForeignKey
from jwt import encode, decode, ExpiredSignatureError, InvalidTokenError

from . import db, app
from .utils import get_first_date


class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.BigInteger,
                   primary_key=True,
                   index=True,
                   autoincrement=True)
    username = db.Column(db.String(255))
    password_hash = db.Column(db.String(255))

    def hash_password(self, password):
        self.password_hash = pwd_context.encrypt(password)

    def verify_password(self, password):
        return pwd_context.verify(password, self.password_hash)

    @staticmethod
    def generates_auth_token(user_id):
        try:
            payload = {"user_id": user_id}
            return encode(
                payload,
                app.config.get('SECRET_KEY'),
                algorithm='HS256'
            )
        except Exception as e:
            return e

    @staticmethod
    def decode_auth_token(auth_token):
        try:
            payload = decode(auth_token, app.config.get('SECRET_KEY'), algorithms=["HS256"])
            return payload['user_id']
        except ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except InvalidTokenError:
            return 'Invalid token. Please log in again.'


class Notification(db.Model):

    __tablename__ = "notifications"

    id = db.Column(db.BigInteger,
                   primary_key=True,
                   autoincrement=True,
                   index=True
                   )
    user_id = db.Column(db.BigInteger,
                        ForeignKey("users.id"),
                        index=True)
    title = db.Column(db.String(125))
    description = db.Column(db.Text())
    period_type = db.Column(db.SmallInteger,
                            default=0)
    next_notification = db.Column(db.Date,
                                  index=True,
                                  default=get_first_date())
