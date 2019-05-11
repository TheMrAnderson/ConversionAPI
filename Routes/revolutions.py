from flask_restplus import Namespace, Resource
from Conversions import revolutions

ns_revolutions = Namespace(
    'Revolutions', description='Revolution calculations')
