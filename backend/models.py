from sqlalchemy import ForeignKey

from . import db
from .utils import get_first_date


class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.BigInteger,
                   primary_key=True,
                   index=True,
                   autoincrement=True)
    name = db.Column(db.String(125))


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
