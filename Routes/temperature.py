from flask_restplus import Namespace, Resource
from Conversions import temperature

ns_temperature = Namespace(
    'Temperature', description='Temperature calculations')


@ns_temperature.route('/Celcius/<string:input>/ToFehrenheit')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return temperature.celcius_to_fehrenheit(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400


@ns_temperature.route('/Fehrenheit/<string:input>/ToCelcius')
class Conversions(Resource):
    def get(self, input):
        try:
            input = float(input)
            return temperature.fehrenheit_to_celcius(input)
        except ValueError:
            return "Can't convert {} to number".format(input), 400
