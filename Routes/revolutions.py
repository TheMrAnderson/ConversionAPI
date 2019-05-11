from flask_restplus import Namespace, Resource
from ConversionAPI.Conversions import revolutions

ns_revolutions = Namespace(
    'Revolutions', description='Revolution calculations')
