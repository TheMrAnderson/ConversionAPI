from flask import Flask
from apiv1 import blueprint as api1

app = Flask(__name__)
app.register_blueprint(api1)
app.run(debug=True, port=80, host="0.0.0.0")
