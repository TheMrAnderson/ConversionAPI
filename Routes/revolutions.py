from flask_restplus import Namespace, Resource
from Conversions import revolutions

ns_revolutions = Namespace(
    'Revolutions', description='Revolution calculations')


@ns_revolutions.route('/RevsPerMile/<string:input>/PerMillimeter')
class ConversionsGearRatios(Resource):
    def get(self, circumference):
        try:
            input = float(input)
            return revolutions.revs_per_mile_per_mm(circumference)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_revolutions.route('/RevsPerMile/<string:input>/PerInch')
class ConversionsGearRatios(Resource):
    def get(self, circumference):
        try:
            input = float(input)
            return revolutions.revs_per_mile_per_in(circumference)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_revolutions.route('/RevsPerKilometer/<string:input>/PerMillimeter')
class ConversionsGearRatios(Resource):
    def get(self, circumference):
        try:
            input = float(input)
            return revolutions.revs_per_km_per_mm(circumference)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_revolutions.route('/RevsPerKilometer/<string:input>/PerInch')
class ConversionsGearRatios(Resource):
    def get(self, circumference):
        try:
            input = float(input)
            return revolutions.revs_per_km_per_in(circumference)
        except ValueError:
            return "Can't convert {} to number".format(input), 400
