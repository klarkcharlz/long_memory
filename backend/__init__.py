from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

from .settings import DATABASE_URL
from .utils import CustomJSONEncoder


app = Flask(__name__)
app.debug = True
app.json_encoder = CustomJSONEncoder
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SQLALCHEMY_ECHO'] = True

CORS(app)
db = SQLAlchemy(app)

from .routes import api

from .models import *
migrate = Migrate(app, db)
