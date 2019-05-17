from flask_restplus import Namespace, Resource
from Conversions import weight

ns_weight = Namespace('Weight', description='Weight calculations')


@ns_weight.route('/Carat/<string:input>/ToGram')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.carat_to_gram(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Grain/<string:input>/ToGram')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.grain_to_gram(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Grain/<string:input>/ToOunce')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.grain_to_oz(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Grain/<string:input>/ToTroyPennyweight')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.grain_to_troy_pennyweight(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Gram/<string:input>/ToGrain')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.gram_to_grain(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Gram/<string:input>/ToOunce')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.grain_to_oz(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Gram/<string:input>/ToPound')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.gram_to_lb(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Kilogram/<string:input>/ToPound')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.kg_to_lb(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Ounce/<string:input>/ToGrain')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.oz_to_grain(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Ounce/<string:input>/ToGram')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.oz_to_gram(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Ounce/<string:input>/ToTroyOunce')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.oz_to_troy_ounce(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Point/<string:input>/ToCarat')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.point_to_carat(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Point/<string:input>/ToCarat')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.point_to_carat(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Point/<string:input>/ToGram')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.point_to_gram(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Pound/<string:input>/ToGram')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.pound_to_gram(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Pound/<string:input>/ToOunce')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.pound_to_ounce(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/Pound/<string:input>/ToTroyPound')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.pound_to_troy_pound(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/TroyGrain/<string:input>/ToGrain')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.troy_grain_to_grain(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/TroyPennyweight/<string:input>/ToGrain')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.troy_pennyweight_to_grain(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/TroyPennyweight/<string:input>/ToTroyOunce')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.troy_pennyweight_to_troy_ounce(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/TroyPound/<string:input>/ToPound')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.troy_pound_to_pound(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_weight.route('/TroyPound/<string:input>/ToTroyOunce')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return weight.troy_pound_to_troy_ounce(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400
