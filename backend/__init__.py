from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
# from flask_cors import CORS
from .utils import CustomJSONEncoder

from .settings import DATABASE_URL

app = Flask(__name__)
app.json_encoder = CustomJSONEncoder
# CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)

from .routes import api

from .models import *
migrate = Migrate(app, db)
