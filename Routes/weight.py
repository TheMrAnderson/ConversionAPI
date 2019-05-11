from flask_restplus import Namespace, Resource
from ConversionAPI.Conversions import weight

ns_weight = Namespace('Weight', description='Weight calculations')
