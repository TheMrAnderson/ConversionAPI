from flask_restplus import Namespace, Resource
from ConversionAPI.Conversions import torque

ns_torque = Namespace('Torque', description='Torque calculations')
