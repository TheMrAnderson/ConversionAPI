from flask_restplus import Namespace, Resource
from Conversions import gear_ratios

ns_gear_ratios = Namespace('GearRatio', description='Gear Ratio calculations')


@ns_gear_ratios.route('/DetermineNew/<string:newTireDiam>/<string:oldTireDiam>/<string:oldAxleRatio>')
class ConversionsGearRatios(Resource):
    def get(self, newTireDiam, oldTireDiam, oldAxleRatio):
        try:
            newTireDiam = float(newTireDiam)
            oldTireDiam = float(oldTireDiam)
            oldAxleRatio = float(oldAxleRatio)
            return gear_ratios.new_gear_ratio(newTireDiam, oldTireDiam, oldAxleRatio)
        except ValueError:
            return "Can't convert {} to number".format(newTireDiam, oldTireDiam, oldAxleRatio), 400


@ns_gear_ratios.route('/DetermineEffective/<string:newTireDiam>/<string:oldTireDiam>/<string:axleRatio>')
class ConversionsGearRatios(Resource):
    def get(self, newTireDiam, oldTireDiam, axleRatio):
        try:
            newTireDiam = float(newTireDiam)
            oldTireDiam = float(oldTireDiam)
            axleRatio = float(axleRatio)
            return gear_ratios.effective_gear_ratio(newTireDiam, oldTireDiam, axleRatio)
        except ValueError:
            return "Can't convert {} to number".format(newTireDiam, oldTireDiam, axleRatio), 400


@ns_gear_ratios.route('/EngineRPM/<string:axleRatio>/<string:vehicleSpeedMph>/<string:transmissionRatio>/<string:tireDiameterInch>')
class ConversionsGearRatios(Resource):
    def get(self, axleRatio, vehicleSpeedMph, transmissionRatio, tireDiameterInch):
        try:
            axleRatio = float(axleRatio)
            vehicleSpeedMph = float(vehicleSpeedMph)
            transmissionRatio = float(transmissionRatio)
            tireDiameterInch = float(tireDiameterInch)
            return gear_ratios.engine_rpm(axleRatio, vehicleSpeedMph, transmissionRatio, tireDiameterInch)
        except ValueError:
            return "Can't convert {} to number".format(axleRatio, vehicleSpeedMph, transmissionRatio, tireDiameterInch), 400


@ns_gear_ratios.route('/VehicleSpeedAtEngineRPM/<string:engineRpm>,/<string:tireHeightInch>,/<string:transmissionRatio>/<string:odRatio>/<string:transferCaseRatio>/<string:axleRatio>')
class ConversionsGearRatios(Resource):
    def get(self, engineRpm, tireHeightInch, transmissionRatio, odRatio, transferCaseRatio, axleRatio):
        try:
            engineRpm = float(engineRpm)
            tireHeightInch = float(tireHeightInch)
            transmissionRatio = float(transmissionRatio)
            odRatio = float(odRatio)
            transferCaseRatio = float(transferCaseRatio)
            axleRatio = float(axleRatio)
            return gear_ratios.vehicle_speed_at_engine_rpm(engineRpm, tireHeightInch, transmissionRatio, odRatio, transferCaseRatio, axleRatio)
        except ValueError:
            return "Can't convert {} to number".format(engineRpm, tireHeightInch, transmissionRatio, odRatio, transferCaseRatio, axleRatio), 400
