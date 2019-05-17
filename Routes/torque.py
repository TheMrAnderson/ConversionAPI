from flask_restplus import Namespace, Resource
from Conversions import torque

ns_torque = Namespace('Torque', description='Torque calculations')
@ns_torque.route('/GramCentimeter/<string:input>/ToDyneCentimeter')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.gram_cm_to_dyne_cm(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/GramCentimeter/<string:input>/ToKilogramMeter')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.gram_cm_to_kg_meter(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/GramCentimeter/<string:input>/ToOunceInch')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.gram_cm_to_oz_in(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/GramCentimeter/<string:input>/ToPoundFood')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.gram_cm_to_lb_ft(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/MilliNewtonMeter/<string:input>/ToOunceInch')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.milli_newton_meter_to_oz_in(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/NewtonCentimeter/<string:input>/ToOunceInch')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.newton_cm_to_oz_in(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/NewtonMeter/<string:input>/ToOunceInch')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.newton_meter_to_oz_in(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/OunceInch/<string:input>/ToDyneCentimeter')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.oz_in_to_dyne_cm(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/OunceInch/<string:input>/ToKilogramMeter')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.oz_in_to_kg_meter(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/OunceInch/<string:input>/ToMilliNewtonMeter')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.oz_in_to_milli_newton_meter(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/OunceInch/<string:input>/ToNewtonCentimeter')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.oz_in_to_newton_cm(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/OunceInch/<string:input>/ToNewtonMeter')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.oz_in_to_newton_m(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/OunceInch/<string:input>/ToPoundFoot')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.oz_in_to_lb_ft(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/OunceInch/<string:input>/ToInchPound')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.oz_in_to_lb_in(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/NewtonMeter/<string:input>/ToPoundFoot')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.newton_meter_to_lb_ft(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_torque.route('/PoundFoot/<string:input>/ToNewtonMeter')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return torque.lb_ft_to_newton_meter(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400
