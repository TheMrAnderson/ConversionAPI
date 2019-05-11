from flask import Flask
from apiv1 import blueprint as api1

app = Flask(__name__)
app.register_blueprint(api1)
app.run(debug=True)

if __name__ == '__main__':
    app.run(debug=True)
