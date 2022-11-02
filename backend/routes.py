from flask_restful import Api

from .resources import NotificatorMaster, Register, Authorization
from . import app

api = Api(app)

api.add_resource(
    NotificatorMaster,
    '/notifications/<int:user_id>',
)

api.add_resource(
    Register,
    '/register',
)

api.add_resource(
    Authorization,
    '/auth',
)
