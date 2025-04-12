from config import app, db
from flask import jsonify, request
from marshmallow import ValidationError

@app.route('/')
def home():
    return 'Welcome aboard the PennyPilot backend!'

if __name__ == "__main__":
    app.run(debug=True) 