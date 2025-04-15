from config import db, app

class User(db.Model):
    __tablename__ = 'Users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100))
    phone = db.Column(db.String(10))

class LinkedAccount(db.Model):
    __tablename__ = 'Linked_Accounts'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    associated_user = db.Column(db.Integer, db.ForeignKey('Users.id'))

class Transaction(db.Model):
    __tablename__ = 'Transactions'
    id = db.Column(db.Integer, primary_key=True)
    transaction_date = db.Column(db.Date, nullable=False)
    transaction_amount = db.Column(db.Float, nullable=False)

class Goal(db.Model):
    __tablename__ = 'Goals'
    id = db.Column(db.Integer, primary_key=True)
    target_amount = db.Column(db.Float, nullable=False)
    current_amount = db.Column(db.Float, nullable=False)
    deadline = db.Column(db.Date, nullable=False)

# Creating tables

with app.app_context():
    db.create_all()