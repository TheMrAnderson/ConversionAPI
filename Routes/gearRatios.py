from flask_restplus import Namespace, Resource
from Conversions import gearRatios

ns_gear_ratios = Namespace('GearRatio', description='Gear Ratio calculations')


@ns_gear_ratios.route('/DetermineNew/<float:newTireDiam>/<float:oldTireDiam>/<float:oldAxleRatio>')
@ns_gear_ratios.route('/DetermineNew/<int:newTireDiam>/<int:oldTireDiam>/<float:oldAxleRatio>')
@ns_gear_ratios.route('/DetermineNew/<int:newTireDiam>/<float:oldTireDiam>/<float:oldAxleRatio>')
@ns_gear_ratios.route('/DetermineNew/<float:newTireDiam>/<int:oldTireDiam>/<float:oldAxleRatio>')
class ConversionsGearRatios(Resource):
    def get(self, newTireDiam, oldTireDiam, oldAxleRatio):
        return gearRatios.determine_new_gear_ratio(newTireDiam, oldTireDiam, oldAxleRatio)


@ns_gear_ratios.route('/DetermineEffective/<float:newTireDiam>/<float:oldTireDiam>/<float:axleRatio>')
@ns_gear_ratios.route('/DetermineEffective/<int:newTireDiam>/<int:oldTireDiam>/<float:axleRatio>')
@ns_gear_ratios.route('/DetermineEffective/<int:newTireDiam>/<float:oldTireDiam>/<float:axleRatio>')
@ns_gear_ratios.route('/DetermineEffective/<float:newTireDiam>/<int:oldTireDiam>/<float:axleRatio>')
class ConversionsGearRatios(Resource):
    def get(self, newTireDiam, oldTireDiam, axleRatio):
        return gearRatios.determine_effective_gear_ratio(newTireDiam, oldTireDiam, axleRatio)
