from flask_restplus import Namespace, Resource
from Conversions import speed

ns_speed = Namespace('Speed', description='Speed calculations')


@ns_speed.route('/MPH/<string:input>/ToKnots')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return speed.mph_to_knots(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_speed.route('/Knots/<string:input>/ToMPH')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return speed.knots_to_mph(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_speed.route('/Knots/<string:input>/ToMach')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return speed.knots_to_mach(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_speed.route('/Mph/<string:input>/ToMach')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return speed.mph_to_mach(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400
