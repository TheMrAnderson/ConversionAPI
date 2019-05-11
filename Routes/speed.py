from flask_restplus import Namespace, Resource
from Conversions import speed

ns_speed = Namespace('Speed', description='Speed calculations')


@ns_speed.route('/Mph/<float:input>/ToKnots')
@ns_speed.route('/Mph/<int:input>/ToKnots')
class Conversions(Resource):
    def get(self, input):
        return speed.mph_to_knots(input)
