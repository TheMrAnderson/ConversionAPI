from flask import Blueprint
from flask_restplus import Api

from Routes.area import ns_area
from Routes.capacity import ns_capacity
from Routes.gearRatios import ns_gear_ratios
from Routes.length import ns_length
from Routes.revolutions import ns_revolutions
from Routes.speed import ns_speed
from Routes.temperature import ns_temperature
from Routes.torque import ns_torque
from Routes.weight import ns_weight

blueprint = Blueprint('apiv1', __name__, url_prefix='/api/v1')
api = Api(blueprint, version='1.0',
          title='Conversion API',
          description='API to consolidate conversions')

api.add_namespace(ns_area)
api.add_namespace(ns_capacity)
api.add_namespace(ns_gear_ratios)
api.add_namespace(ns_length)
api.add_namespace(ns_revolutions)
api.add_namespace(ns_speed)
api.add_namespace(ns_temperature)
api.add_namespace(ns_torque)
api.add_namespace(ns_weight)
