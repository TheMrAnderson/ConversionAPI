from flask_restplus import Namespace, Resource
from Conversions import length

ns_length = Namespace('Length', description='Length calculations')


@ns_length.route('/Millimeter/<string:input>/ToInch')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.mm_to_in(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/Centimeter/<string:input>/ToInch')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.cm_to_in(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/Feet/<string:input>/ToMillimeter')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.ft_to_mm(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/Inch/<string:input>/ToCentimeter')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.in_to_cm(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/Inch/<string:input>/ToMillimeter')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.in_to_mm(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/Kilometer/<string:input>/ToMile')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.km_to_mile(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/Meter/<string:input>/ToFoot')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.m_to_ft(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/Meter/<string:input>/ToInch')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.m_to_inch(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/Mile/<string:input>/ToKilometer')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.mi_to_km(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/Micrometer/<string:input>/ToInch')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.micrometer_to_in(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/Yard/<string:input>/ToMillimeter')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.yard_to_mm(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/RackU/<string:input>/ToInch')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.rackU_to_in(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/Inch/<string:input>/ToRackU')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.in_to_rackU(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/Inch/<string:input>/ToHand')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.in_to_hand(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_length.route('/Hand/<string:input>/ToInch')
class ConversionsGearRatios(Resource):
    def get(self, input):
        try:
            input = float(input)
            return length.hand_to_in(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400
