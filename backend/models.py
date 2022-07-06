from . import db
from sqlalchemy import ForeignKey


class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.BigInteger, primary_key=True, index=True)
    name = db.Column(db.String(125))


class Notification(db.Model):

    __tablename__ = "notifications"

    id = db.Column(db.BigInteger,
                   primary_key=True,
                   index=True)
    user_id = db.Column(db.BigInteger,
                        ForeignKey("users.id"),
                        primary_key=True,
                        index=True)
    title = db.Column(db.String(125))
    description = db.Column(db.Text())
    period_type = db.Column(db.SmallInteger)
    next_notification = db.Column(db.Date, index=True)
