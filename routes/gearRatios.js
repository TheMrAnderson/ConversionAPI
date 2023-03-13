'use strict'

const apiBasePath = '/api/v2/GearRatios/'

/**
 * Determine the new gear ratio needed when moving to a different tire size to keep the overall ratio the same
 * @param {Number} newTireDiamIn Diameter in inches of new tire
 * @param {Number} oldTireDiamIn Diameter in inches of old tire
 * @param {Number} axleRatio Ring/pinion ratio before the colon, ex: 3.73
 * @returns Rounded gear ratio
 */
function newGearRatio(newTireDiamIn, oldTireDiamIn, axleRatio) {
	return round((newTireDiamIn / oldTireDiamIn) * axleRatio, 2)
}

/**
 * Determine the effective gear ratio when moving to a different tire size
 * @param {Number} newTireDiamIn Diameter in inches of new tire
 * @param {Number} oldTireDiamIn Diameter in inches of old tire
 * @param {Number} axleRatio Ring/pinion ratio before the colon, ex: 3.73
 * @returns Rounded gear ratio
 */
function effectiveGearRatio(newTireDiamIn, oldTireDiamIn, axleRatio) {
	return round((oldTireDiamIn / newTireDiamIn) * axleRatio, 2)
}

/**
 * Determine the engine RPM at a given speed for the combination of the axle ratio, transmission gear and tire diameter
 * @param {Number} axleRatio Ring/pinion ratio before the colon, ex: 3.73
 * @param {Number} vehicleSpeedMph Vehicle speed in MPH
 * @param {Number} transRatio Transmission ratio before the colon, ex: 2.54
 * @param {Number} tireDiamIn Diameter in inches of tire
 * @returns Rounded engine speed
 */
function engineRpm(axleRatio, vehicleSpeedMph, transRatio, tireDiamIn) {

	// 336.13 is used to convert the result to RPM
	// [63360 inches per mile / (60 miles per hour * Pi)]
	// http://www.crawlpedia.com/rpm_gear_calculator.htm
	return round((axleRatio * vehicleSpeedMph * transRatio * 336.13) / tireDiamIn, 1)
}

/**
 * Determine the vehicle speed at a given engine RPM for the combination of the tire diameter, transmission gear, overdrive (if equipped, else 1, can also be used to figure a second transfer case), transfer case (high or low gear as needed), and axle ratio
 * @param {Number} engineRpm RPM of the engine
 * @param {Number} tireDiamIn Diameter in inches of tire
 * @param {Number} transRatio Transmission ratio before the colon, ex: 2.54
 * @param {Number} auxRatio Overdrive or second transfer case ratio before the colon, ex: 4.0. 1 if not equipped
 * @param {Number} tCaseRatio Transfer case ratio before the colon, ex: 2.72
 * @param {Number} axleRatio Ring/pinion ratio before the colon, ex: 3.73
 * @returns Rounded vehicle speed
 */
function vehicleSpeedAtEngineRpm(engineRpm, tireDiamIn, transRatio, auxRatio, tCaseRatio, axleRatio) {
	// http://www.public.asu.edu/~grover/willys/speed.html
	// https://wahiduddin.net/calc/calc_speed_rpm.htm
	const tireDiam = tireDiamIn / 2
	drivetrain_ratio = transRatio * auxRatio * tCaseRatio * axleRatio
	return round(0.00595 * (engineRpm * tireDiam) / drivetrain_ratio, 2)
}

/**
 * Determine crawl ratio of vehicle
 * Ratio Ranges:
 * - Under 50: Most factory setups fall here
 * - 50-60s: Backroads and light trail use
 * - 80s: Intermediate trail use
 * - 110-130s: Ideal for crawling. It allows taking obstacles at a slow, controlled speed without riding the brakes or applying constant throttle to avoid stalling
 * - Over 130: Excessive with little to no additional benefit
 * @param {Number} axleRatio Ring/pinion ratio before the colon, ex: 3.73
 * @param {Number} lowTCaseRatio Transfer case ratio before the colon, ex: 2.72
 * @param {Number} transLowGearRatio Transmission ratio before the colon, ex: 2.54
 * @param {Number} auxRatio Overdrive or second transfer case ratio before the colon, ex: 4.0. 1 if not equipped
 * @returns Rounded crawl ratio and short text description
 */
function crawlRatio(axleRatio, lowTCaseRatio, transLowGearRatio, auxRatio) {
	// https://www.offroadxtreme.com/news/off-road-101-what-is-crawl-ratio/
	const cr = round(axleRatio * lowTCaseRatio * transLowGearRatio * auxRatio, 2)
	if (cr < 50)
		verbose = 'Factory style'
	else if (cr >= 50 && cr < 80)
		verbose = 'Backroads and trail use'
	else if (cr >= 80 && cr < 110)
		verbose = 'Intermediate trail use'
	else if (cr >= 110 && cr < 135)
		verbose = 'Ideal for crawling'
	else
		verbose = 'Excessive'

	return cr, verbose
}

/**
 * How fast an object rotates or revolves relative to another point
 * @param {Number} axleRatio Ring/pinion ratio before the colon, ex: 3.73
 * @param {Number} speedMph Vehicle speed in MPH
 * @param {Number} tireDiamIn Diameter in inches of tire
 * @returns Rounded rotation velocity
 */
function rotationVelocity(axleRatio, speedMph, tireDiamIn) {
	// https://www.ajdesigner.com/phpgear/gear_equation_effective_gear_ratio.php
	return round((168 * axleRatio * speedMph) / (tireDiamIn / 2), 4)
}

/**
 * Determine the gear ratio by counting teeth on the ring and pinion
 * @param {Number} ringGearTeeth Number of teeth on the ring gear
 * @param {Number} pinionGearTeeth Number of teeth on the pinion gear
 * @returns Rounded axle ratio
 */
function gearRatio(ringGearTeeth, pinionGearTeeth) {
	return round(ringGearTeeth / pinionGearTeeth, 2)
}

/**
 * Determine actual speed when changing tire sizes and not regearing. The speedometer is still calibrated at factory specs and this will show what speed you are actually running
 * @param {Number} newTireDiamIn Diameter in inches of new tire
 * @param {Number} oldTireDiamIn Diameter in inches of old tire
 * @param {Number} speedoMph Vehicle speed in MPH as read on the speedometer
 * @returns Rounded vehicle speed
 */
function actualSpeed(newTireDiamIn, oldTireDiamIn, speedoMph) {
	return round((newTireDiamIn / oldTireDiamIn) * speedoMph, 2)
}

export const gearRatiosRoutes = [
{
		method: 'GET',
		path: apiBasePath + 'newGearRatio/{newTireDiamIn}/{oldTireDiamIn}/{axleRatio}',
		handler: (request, h) => {
			return newGearRatio(
				request.params.newTireDiamIn,
				request.params.oldTireDiamIn,
				request.params.axleRatio)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'effectiveGearRatio/{newTireDiamIn}/{oldTireDiamIn}/{axleRatio}',
		handler: (request, h) => {
			return effectiveGearRatio(
				request.params.newTireDiamIn,
				request.params.oldTireDiamIn,
				request.params.axleRatio)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'engineRpm/{axleRatio}/{vehicleSpeedMph}/{transRatio}/{tireDiamIn}',
		handler: (request, h) => {
			return engineRpm(
				request.params.axleRatio,
				request.params.vehicleSpeedMph,
				request.params.transRatio,
				request.params.tireDiamIn
			)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'vehicleSpeedAtEngineRpm/{engineRpm}/{tireDiamIn}/{transRatio}/{auxRatio}/{tCaseRatio}/{axleRatio}',
		handler: (request, h) => {
			return vehicleSpeedAtEngineRpm(
				request.params.engineRpm,
				request.params.tireDiamIn,
				request.params.transRatio,
				request.params.auxRatio,
				request.params.tCaseRatio,
				request.params.axleRatio)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'crawlRatio/{axleRatio}/{lowTCaseRatio}/{transLowGearRatio}/{auxRatio}',
		handler: (request, h) => {
			return crawlRatio(
				request.params.axleRatio,
				request.params.lowTCaseRatio,
				request.params.transLowGearRatio,
				request.params.auxRatio)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'rotationVelocity/{axleRatio}/{speedMph}/{tireDiamIn}',
		handler: (request, h) => {
			return rotationVelocity(
				request.params.axleRatio,
				request.params.speedMph,
				request.params.tireDiamIn)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'gearRatio/{ringGearTeeth}/{pinionGearTeeth}',
		handler: (request, h) => {
			return gearRatio(
				request.params.ringGearTeeth,
				request.params.pinionGearTeeth)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'actualSpeed/{newTireDiamIn}/{oldTireDiamIn}/{speedoMph}',
		handler: (request, h) => {
			return actualSpeed(
				request.params.newTireDiamIn,
				request.params.oldTireDiamIn,
				request.params.speedoMph)
		}
	}
]