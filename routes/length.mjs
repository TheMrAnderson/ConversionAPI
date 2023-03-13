'use strict'

const apiBasePath = '/api/v2/Length/'

function mmToIn(input) {
    return input / 25.4
}

function cmToIn(input) {
    return input / 2.54
}

function ftToMM(input) {
    return input * 304.8
}

function inToCm(input) {
    return input * 2.54
}

function inToMM(input) {
    return input * 25.4
}

function kmToMile(input) {
    return input * 0.6214
}

function mToFt(input) {
    return input * 3.2808
}

function mToInch(input) {
    return input * 39.37007874
}

function miToKm(input) {
    return input * 1.609
}

function micrometerToIn(input) {
    return input * 0.000039370079
}

function yardToMM(input) {
    return input * 914.4
}

function rackUToIn(input) {
    return input * 1.75
}

function inToRackU(input) {
    return input / 1.75
}

function inToHand(input) {
    return input / 4
}

function handToIn(input) {
    return input * 4
}

export const lengthRoutes = [
	{
		method: 'GET',
		path: apiBasePath + 'MmToIn/{input}',
		handler: (request, h) => {
			return mmToIn(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'CmToIn/{input}',
		handler: (request, h) => {
			return cmToIn(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'FtToMM/{input}',
		handler: (request, h) => {
			return ftToMM(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'InToCm/{input}',
		handler: (request, h) => {
			return inToCm(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'InToMM/{input}',
		handler: (request, h) => {
			return inToMM(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'KmToMile/{input}',
		handler: (request, h) => {
			return kmToMile(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'MToFt/{input}',
		handler: (request, h) => {
			return mToFt(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'MToInch/{input}',
		handler: (request, h) => {
			return mToInch(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'MiToKm/{input}',
		handler: (request, h) => {
			return miToKm(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'MicrometerToIn/{input}',
		handler: (request, h) => {
			return micrometerToIn(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'YardToMM/{input}',
		handler: (request, h) => {
			return yardToMM(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'RackUToIn/{input}',
		handler: (request, h) => {
			return rackUToIn(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'InToRackU/{input}',
		handler: (request, h) => {
			return inToRackU(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'InToHand/{input}',
		handler: (request, h) => {
			return inToHand(request.params.input)
		}
    },
    {
		method: 'GET',
		path: apiBasePath + 'HandToIn/{input}',
		handler: (request, h) => {
			return handToIn(request.params.input)
		}
    }
]