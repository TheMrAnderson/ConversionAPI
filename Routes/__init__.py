from flask_restplus import Api

from .area import ns_area

api = Api(
    version='1.0',
    title='Conversion API',
    description='API to consolidate conversions'
)

api.add_namespace(ns_area)
