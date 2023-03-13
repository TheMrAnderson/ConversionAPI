'use strict'

const apiBasePath = '/api/v2/Length/'

function millimeterToInch(input) {
    return input / 25.4
}

function centimeterToInch(input) {
    return input / 2.54
}

function footToMillimeter(input) {
    return input * 304.8
}

function inchToCentimeter(input) {
    return input * 2.54
}

function inchToMiliimeter(input) {
    return input * 25.4
}

function kilometerToMile(input) {
    return input * 0.6214
}

function meterToFoot(input) {
    return input * 3.2808
}

function meterToInch(input) {
    return input * 39.37007874
}

function mileToKilometer(input) {
    return input * 1.609
}

function micrometerToInch(input) {
    return input * 0.000039370079
}

function yardToMillimeter(input) {
    return input * 914.4
}

function rackUToInch(input) {
    return input * 1.75
}

function inchToRackU(input) {
    return input / 1.75
}

function inchToHand(input) {
    return input / 4
}

function handToInch(input) {
    return input * 4
}

export const lengthRoutes = [
	{
		method: 'GET',
		path: apiBasePath + 'millimeterToInch/{input}',
		handler: (request, h) => {
			return millimeterToInch(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'centimeterToInch/{input}',
		handler: (request, h) => {
			return centimeterToInch(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'footToMillimeter/{input}',
		handler: (request, h) => {
			return footToMillimeter(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'inchToCentimeter/{input}',
		handler: (request, h) => {
			return inchToCentimeter(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'inchToMiliimeter/{input}',
		handler: (request, h) => {
			return inchToMiliimeter(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'kilometerToMile/{input}',
		handler: (request, h) => {
			return kilometerToMile(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'meterToFoot/{input}',
		handler: (request, h) => {
			return meterToFoot(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'meterToInch/{input}',
		handler: (request, h) => {
			return meterToInch(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'mileToKilometer/{input}',
		handler: (request, h) => {
			return mileToKilometer(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'micrometerToInch/{input}',
		handler: (request, h) => {
			return micrometerToInch(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'yardToMillimeter/{input}',
		handler: (request, h) => {
			return yardToMillimeter(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'rackUToInch/{input}',
		handler: (request, h) => {
			return rackUToInch(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'inchToRackU/{input}',
		handler: (request, h) => {
			return inchToRackU(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'inchToHand/{input}',
		handler: (request, h) => {
			return inchToHand(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'handToInch/{input}',
		handler: (request, h) => {
			return handToInch(request.params.input)
		}
    }
]