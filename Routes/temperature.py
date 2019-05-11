from flask_restplus import Namespace, Resource
from ConversionAPI.Conversions import temperature

ns_temperature = Namespace(
    'Temperature', description='Temperature calculations')
