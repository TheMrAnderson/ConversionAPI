'use strict'

const apiBasePath = '/api/v2/electricity/'

function getBatteryRuntimeHours(loadWattage, batteryAh) {
	let ampLoad = loadWattage / 12
	return batteryAh / ampLoad / 2
}

function getBatteryRuntimeMinutes(loadWattage, batteryAh) {
	return getBatteryRuntimeHours(loadWattage, batteryAh) / 60
}

function getOhmsVoltAmp(volts, amps) {
	return volts / amps
}

function getOhmsWattAmp(watts, amps) {
	return watts / (amps * amps)
}

function getOhmsVoltWatt(volts, watts) {
	return (volts * volts) / watts
}

function getAmpsVoltOhm(volts, ohms) {
	return volts / ohms
}

function getAmpsWattVolt(watts, volts) {
	return watts / volts
}

function getAmpsWattOhm(watts, ohms) {
	Math.sqrt((watts / ohms))
}

function getVoltsAmpOhm(amps, ohms) {
	return amps * ohms
}

function getVoltsWattAmp(watts, amps) {
	return watts / amps
}

function getVoltsWattOhm(watts, ohms) {
	return Math.sqrt((watts * ohms))
}

function getWattsVoltAmp(volts, amps) {
	return volts * amps
}

function getWattsVoltOhm(volts, ohms) {
	return (volts * volts) / ohms
}

function getWattsAmpOhm(amps, ohms) {
	return (amps * amps) / ohms
}

export const electricityRoutes = [
{
		method: 'GET',
		path: apiBasePath + 'batteryRuntimeHours/{loadWattage}/{batteryAh}',
		handler: (request, h) => {
			return getBatteryRuntimeHours(
				request.params.loadWattage,
				request.params.batteryAh)
		},
		method: 'GET',
		path: apiBasePath + 'batteryRuntimeMinutes/{loadWattage}/{batteryAh}',
		handler: (request, h) => {
			return getBatteryRuntimeMinutes(
				request.params.loadWattage,
				request.params.batteryAh)
		},
		method: 'GET',
		path: apiBasePath + 'getOhmsVoltAmp/{volts}/{amps}',
		handler: (request, h) => {
			return getOhmsVoltAmp(
				request.params.volts,
				request.params.amps)
		},
		method: 'GET',
		path: apiBasePath + 'getOhmsWattAmp/{watts}/{amps}',
		handler: (request, h) => {
			return getOhmsWattAmp(
				request.params.watts,
				request.params.amps)
		},
		method: 'GET',
		path: apiBasePath + 'getOhmsVoltWatt/{volts}/{amps}',
		handler: (request, h) => {
			return getOhmsVoltWatt(
				request.params.volts,
				request.params.amps)
		},
		method: 'GET',
		path: apiBasePath + 'getAmpsVoltOhm/{volts}/{ohms}',
		handler: (request, h) => {
			return getAmpsVoltOhm(
				request.params.volts,
				request.params.ohms)
		},
		method: 'GET',
		path: apiBasePath + 'getAmpsWattVolt/{watts}/{volts}',
		handler: (request, h) => {
			return getAmpsWattVolt(
				request.params.watts,
				request.params.volts)
		},
		method: 'GET',
		path: apiBasePath + 'getAmpsWattOhm/{watts}/{ohms}',
		handler: (request, h) => {
			return getAmpsWattOhm(
				request.params.watts,
				request.params.ohms)
		},
		method: 'GET',
		path: apiBasePath + 'getVoltsAmpOhm/{amps}/{ohms}',
		handler: (request, h) => {
			return getVoltsAmpOhm(
				request.params.amps,
				request.params.ohms)
		},
		method: 'GET',
		path: apiBasePath + 'getVoltsWattAmp/{watts}/{amps}',
		handler: (request, h) => {
			return getVoltsWattAmp(
				request.params.watts,
				request.params.amps)
		},
		method: 'GET',
		path: apiBasePath + 'getVoltsWattOhm/{watts}/{ohms}',
		handler: (request, h) => {
			return getVoltsWattOhm(
				request.params.watts,
				request.params.ohms)
		},
		method: 'GET',
		path: apiBasePath + 'getWattsVoltAmp/{volts}/{amps}',
		handler: (request, h) => {
			return getWattsVoltAmp(
				request.params.volts,
				request.params.amps)
		},
		method: 'GET',
		path: apiBasePath + 'getWattsVoltOhm/{volts}/{ohms}',
		handler: (request, h) => {
			return getWattsVoltOhm(
				request.params.volts,
				request.params.ohms)
		},
		method: 'GET',
		path: apiBasePath + 'getWattsAmpOhm/{amps}/{ohms}',
		handler: (request, h) => {
			return getWattsAmpOhm(
				request.params.amps,
				request.params.ohms)
		}
	}
]