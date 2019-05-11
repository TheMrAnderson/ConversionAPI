from flask_restplus import Namespace, Resource
from Conversions import temperature

ns_temperature = Namespace(
    'Temperature', description='Temperature calculations')
