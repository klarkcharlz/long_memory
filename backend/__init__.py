from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

from .settings import DATABASE_URL
from .utils import CustomJSONEncoder
from .logger import logger


SECRET_KEY = 'iudgfeaiusyfg73fhgewuifg73if32fugbedhjsfg37i2ufbheisdf'

app = Flask(__name__)
app.config['SECRET_KEY'] = SECRET_KEY
CORS(app)
app.debug = True
app.json_encoder = CustomJSONEncoder
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
# app.config['SQLALCHEMY_ECHO'] = True
app.config['CORS_HEADERS'] = 'Content-Type'

db = SQLAlchemy(app)

from .routes import api

from .models import *
migrate = Migrate(app, db)


logger.info('Start application')
