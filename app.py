from flask import *

webServer = Flask(__name__)

@webServer.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        print(request.form['username'] + " : " + request.form['password'])
        success = "Success"
    else:
        success = "Invalid"

    return render_template('login.html', error=success)


@webServer.route("/")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    webServer.run(debug=True)
