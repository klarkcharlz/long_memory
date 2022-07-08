from flask_restful import Api

from .resources import NotificatorMaster
from . import app

api = Api(app)

api.add_resource(
    NotificatorMaster,
    '/',
)
