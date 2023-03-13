'use strict'

const apiBasePath = '/api/v2/Torque/'

function gramCentimeterToDyneCentimeter(input) {
    return input * 981
}

function gramCentimeterToKilogramMeter(input) {
    return input * 0.000001
}

function gramCentimeterToNewtonMeter(input) {
    return input * 0.0000981
}

function gramCentimeterToOunceInch(input) {
    return input * 0.01388736
}

function gramCentimeterToPoundFoot(input) {
    return input * 0.0000724
}

function milliNewtonMeterToOunceInch(input) {
    return input * 0.141612
}

function newtonCentimeterToOunceInch(input) {
    return input * 1.41612
}

function newtonMeterToOunceInch(input) {
    return input * 141.612
}

function ounceInchToDyneCentimeter(input) {
    return input * 70600
}

function ounceInchToKilogramMeter(input) {
    return input * 0.00072
}

function ounceInchToMilliNewtonMeter(input) {
    return input * 7.061548
}

function ounceInchToNewtonCentimeter(input) {
    return input * 0.7061548
}

function ounceInchToNewtonMeter(input) {
    return input * 0.00706
}

function ounceInchToPoundFoot(input) {
    return input * 0.00521
}

function ounceInchToPoundInch(input) {
    return input * 0.0625
}

function newtonMeterToPoundFoot(input) {
    return input * 0.7375621483695506
}

function poundFootToNewtonMeter(input) {
    return input * 1.35581795
}

export const torqueRoutes = [
	{
		method: 'GET',
		path: apiBasePath + 'GramCentimeterToDyneCentimeter/{input}',
		handler: (request, h) => {
			return gramCentimeterToDyneCentimeter(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'GramCentimeterToKilogramMeter/{input}',
		handler: (request, h) => {
			return gramCentimeterToKilogramMeter(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'GramCentimeterToNewtonMeter/{input}',
		handler: (request, h) => {
			return gramCentimeterToNewtonMeter(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'GramCentimeterToOunceInch/{input}',
		handler: (request, h) => {
			return gramCentimeterToOunceInch(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'GramCentimeterToPoundFoot/{input}',
		handler: (request, h) => {
			return gramCentimeterToPoundFoot(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'MilliNewtonMeterToOunceInch/{input}',
		handler: (request, h) => {
			return milliNewtonMeterToOunceInch(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'NewtonCentimeterToOunceInch/{input}',
		handler: (request, h) => {
			return newtonCentimeterToOunceInch(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'NewtonMeterToOunceInch/{input}',
		handler: (request, h) => {
			return newtonMeterToOunceInch(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'OunceInchToDyneCentimeter/{input}',
		handler: (request, h) => {
			return ounceInchToDyneCentimeter(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'OunceInchToKilogramMeter/{input}',
		handler: (request, h) => {
			return ounceInchToKilogramMeter(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'OunceInchToMilliNewtonMeter/{input}',
		handler: (request, h) => {
			return ounceInchToMilliNewtonMeter(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'OunceInchToNewtonCentimeter/{input}',
		handler: (request, h) => {
			return ounceInchToNewtonCentimeter(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'OunceInchToNewtonMeter/{input}',
		handler: (request, h) => {
			return ounceInchToNewtonMeter(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'OunceInchToPoundFoot/{input}',
		handler: (request, h) => {
			return ounceInchToPoundFoot(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'OunceInchToPoundInch/{input}',
		handler: (request, h) => {
			return ounceInchToPoundInch(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'NewtonMeterToPoundFoot/{input}',
		handler: (request, h) => {
			return newtonMeterToPoundFoot(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'poundFootToNewtonMeter/{input}',
		handler: (request, h) => {
			return poundFootToNewtonMeter(request.params.input)
		}
    }
]