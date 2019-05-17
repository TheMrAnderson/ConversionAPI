from flask_restplus import Namespace, Resource
from Conversions import area

ns_area = Namespace('Area', description='Area calculations')


@ns_area.route('/Acre/<string:input>/ToSquareFoot')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return area.acre_to_ft2(input), 200
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_area.route('/Acre/<string:input>/ToSquareMile')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return area.acre_to_mile2(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_area.route('/Acre/<string:input>/ToSquareYard')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return area.acre_to_yard2(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_area.route('/SquareFoot/<string:input>/ToAcre')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return area.ft2_to_acre(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_area.route('/SquareFoot/<string:input>/ToSquareInch')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return area.ft2_to_in2(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_area.route('/SquareInch/<string:input>/ToSquareFoot')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return area.in2_to_ft2(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_area.route('/SquareInch/<string:input>/ToSquareYard')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return area.in2_to_yard2
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_area.route('/SquareMile/<string:input>/ToAcre')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return area.mile2_to_acre(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_area.route('/SquareRod/<string:input>/ToSquareYard')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return area.rod2_to_yard2(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_area.route('/SquareYard/<string:input>/ToAcre')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return area.yard2_to_acre(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_area.route('/SquareYard/<string:input>/ToSquareInch')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return area.yard2_to_in2(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_area.route('/SquareYard/<string:input>/ToSquareRod')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return area.yard2_to_rod2(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_area.route('/Circumference/<string:input>')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return area.circumference(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400
