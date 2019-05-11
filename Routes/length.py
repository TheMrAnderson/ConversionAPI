from flask_restplus import Namespace, Resource
from ConversionAPI.Conversions import length

ns_length = Namespace('Length', description='Length calculations')
