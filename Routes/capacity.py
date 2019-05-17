from flask_restplus import Namespace, Resource
from Conversions import capacity

ns_capacity = Namespace('Capacity', description='Capacity calculations')


@ns_capacity.route('/Bushel/<string:input>/ToCubicInch')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.bushel_to_in3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Bushel/<string:input>/ToLiter')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.bushel_to_liter(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Bushel/<string:input>/ToPeck')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.bushel_to_peck(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/CubicCentimeter/<string:input>/ToCubicInch')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.cm3_to_in3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/CubicDecimeter/<string:input>/ToCubicInch')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.dm3_to_in3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/CubicFoot/<string:input>/ToCubicMeter')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.ft3_to_m3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/CubicInch/<string:input>/ToCubicCentimeter')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.in3_to_cm3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/CubicInch/<string:input>/ToCubicDecimeter')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.in3_to_dm3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/CubicInch/<string:input>/ToUSGallon')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.in3_to_us_gallon(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/CubicMeter/<string:input>/ToCubicYard')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.m3_to_yard3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/CubicMeter/<string:input>/ToCubicYard')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.m3_to_yard3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/CubicYard/<string:input>/ToCubicMeter')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.yard3_to_m3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Cup/<string:input>/ToOunce')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.cup_to_ounce(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/USGallon/<string:input>/ToCubicInch')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.us_gallon_to_in3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/USGallon/<string:input>/ToLiter')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.us_gallon_to_liter(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/USGallon/<string:input>/ToOunce')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.us_gallon_to_ounce(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Liter/<string:input>/ToCubicInch')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.liter_to_in3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Liter/<string:input>/ToUSGallon')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.liter_to_us_gallon(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Liter/<string:input>/ToUSDryQuart')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.liter_to_us_qt_dry(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Liter/<string:input>/ToUSLiquidQuart')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.liter_to_us_qt_liquid(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Milliliter/<string:input>/ToOunce')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.ml_to_oz(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Ounce/<string:input>/ToCubicCentimeter')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.oz_to_cm3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Ounce/<string:input>/ToCubicInch')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.oz_to_in3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Ounce/<string:input>/ToCup')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.oz_to_cup(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Ounce/<string:input>/ToMilliliter')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.oz_to_ml(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Ounce/<string:input>/ToUSGallon')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.oz_to_us_gallon(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Ounce/<string:input>/ToPint')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.oz_to_pint(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Ounce/<string:input>/ToQuart')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.oz_to_quart(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Ounce/<string:input>/ToTablespoon')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.oz_to_tbsp(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Ounce/<string:input>/ToTeaspoon')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.oz_to_tsp(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Teaspoon/<string:input>/ToTablespoon')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.tsp_to_tbsp(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Tablespoon/<string:input>/ToTeaspoon')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.tbsp_to_tsp(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Tablespoon/<string:input>/ToOunce')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.tbsp_to_oz(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Teaspoon/<string:input>/ToOunce')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.tsp_to_oz(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Peck/<string:input>/ToLiter')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.peck_to_liter(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Peck/<string:input>/ToUSDryQuart')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.peck_to_us_quart_dry(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Pint/<string:input>/ToCubicCentimeter')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.pint_to_cm3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Pint/<string:input>/ToCubicFoot')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.pint_to_ft3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Pint/<string:input>/ToCubicInch')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.pint_to_in3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/Pint/<string:input>/ToOunce')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.pint_to_oz(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/USQuart/<string:input>/ToCubicInch')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.us_quart_to_in3(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/USQuart/<string:input>/ToLiter')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.us_quart_to_liter(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_capacity.route('/USQuart/<string:input>/ToOunce')
class ConversionsArea(Resource):
    def get(self, input):
        try:
            input = float(input)
            return capacity.us_quart_to_oz(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400
