from flask_restful import Api

from .resources import StartPage
from . import app

api = Api(app)

api.add_resource(
    StartPage,
    '/',
)
