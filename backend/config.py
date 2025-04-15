from flask import Flask
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from root_password import root_password

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+mysqlconnector://root:{root_password}@localhost/pennypilot_db'
db = SQLAlchemy(app)
ma = Marshmallow(app)