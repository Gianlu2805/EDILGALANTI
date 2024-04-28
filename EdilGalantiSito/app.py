from flask import *
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'superSecretKey'
db.init_app(app)

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(50), nullable=False)

@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        utente = User(request.form['username'], request.form['password'])
        return "" + request.form['username'] + " : " + request.form['password']
    else:
        success = "Invalid"

    return render_template('login.html')


@app.route("/")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=50000)
