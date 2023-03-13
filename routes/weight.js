'use strict'

const apiBasePath = '/api/v2/Weight/'

function caratToGram(input) {
	return input * 0.2
}

function grainToGram(input) {
	return input * 0.0648
}

function grainToOunce(input) {
	return input * 0.002285714
}

function grainToTroyPennyweight(input) {
	return input * 0.04167
}

function gramToGrain(input) {
	return input * 15.4321
}

function gramToOunce(input) {
	return input * 0.035273962
}

function gramToPound(input) {
	return input * 0.002204622622
}

function kilogramToPound(input) {
	return input * 2.204622622
}

function ounceToGrain(input) {
	return input * 437.5
}

function ounceToGram(input) {
	return input * 28.349527
}

function ounceToTroyOunce(input) {
	return input * 0.9114583
}

function pointToCarat(input) {
	return input / 100
}

function pointToGram(input) {
	return input / 500
}

function poundToGram(input) {
	return input * 453.59237
}

function poundToOunce(input) {
	return input * 16
}

function poundToTroyPound(input) {
	return input * 1.21528
}

function troyGrainToGrain(input) {
	return input
}

function troyPennyweightToGrain(input) {
	return input * 24
}

function troyPennyweightToTroyOunce(input) {
	return input * 0.05
}

function troyPoundToPound(input) {
	return input * 0.822857
}

function troyPoundToTroyOunce(input) {
	return input * 12
}

export const weightRoutes = [
	{
		method: 'GET',
		path: apiBasePath + 'CaratToGram/{input}',
		handler: (request, h) => {
			return caratToGram(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'GrainToGram/{input}',
		handler: (request, h) => {
			return grainToGram(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'GrainToOunce/{input}',
		handler: (request, h) => {
			return grainToOunce(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'GrainToTroyPennyweight/{input}',
		handler: (request, h) => {
			return grainToTroyPennyweight(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'GramToGrain/{input}',
		handler: (request, h) => {
			return gramToGrain(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'GramToOunce/{input}',
		handler: (request, h) => {
			return gramToOunce(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'GramToPound/{input}',
		handler: (request, h) => {
			return gramToPound(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'KilogramToPound/{input}',
		handler: (request, h) => {
			return kilogramToPound(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'OunceToGrain/{input}',
		handler: (request, h) => {
			return ounceToGrain(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'OunceToGram/{input}',
		handler: (request, h) => {
			return ounceToGram(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'OunceToTroyOunce/{input}',
		handler: (request, h) => {
			return ounceToTroyOunce(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'PointToCarat/{input}',
		handler: (request, h) => {
			return pointToCarat(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'PointToGram/{input}',
		handler: (request, h) => {
			return pointToGram(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'PoundToGram/{input}',
		handler: (request, h) => {
			return poundToGram(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'PoundToOunce/{input}',
		handler: (request, h) => {
			return poundToOunce(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'PoundToTroyPound/{input}',
		handler: (request, h) => {
			return poundToTroyPound(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'TroyGrainToGrain/{input}',
		handler: (request, h) => {
			return troyGrainToGrain(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'TroyPennyweightToGrain/{input}',
		handler: (request, h) => {
			return troyPennyweightToGrain(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'TroyPennyweightToTroyOunce/{input}',
		handler: (request, h) => {
			return troyPennyweightToTroyOunce(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'TroyPoundToPound/{input}',
		handler: (request, h) => {
			return troyPoundToPound(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'TroyPoundToTroyOunce/{input}',
		handler: (request, h) => {
			return troyPoundToTroyOunce(request.params.input)
		}
	}
]