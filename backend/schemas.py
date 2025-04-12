from config import ma
from marshmallow import fields

class UserSchema(ma.Schema):
    name = fields.String(required=True)
    email = fields.String(required=True)
    phone = fields.String(required=True)

    class Meta:
        fields = ('id', 'name', 'email', 'phone')

class LinkedAccountSchema(ma.Schema):
    username = fields.String(required=True)
    password = fields.String(required=True)
    associated_user = fields.Integer(required=True)

    class Meta:
        fields = ('id', 'username', 'password', 'associated_user')

class TransactionSchema(ma.Schema):
    transaction_date = fields.Date(required=True)
    transaction_amount = fields.Float(required=True)

    class Meta:
        fields = ('id', 'transaction_date', 'transaction_amount')

class GoalSchema(ma.Schema):
    target_amount = fields.Float(required=True)
    current_amount = fields.Float(required=True)
    deadline = fields.Date(required=True)

    class Meta:
        fields = ('id', 'target_amount', 'current_amount', 'deadline')

# Initializing schemas

user_schema = UserSchema()
linked_account_schema = LinkedAccountSchema()
transaction_schema = TransactionSchema()
goal_schema = GoalSchema()