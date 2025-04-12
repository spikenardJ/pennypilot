from flask import Flask
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:Jajoconi1@localhost/pennypilot_db'
db = SQLAlchemy(app)
ma = Marshmallow(app)