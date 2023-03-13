'use strict'

const apiBasePath = '/api/v2/Speed/'

function mphToKnots(input) {
	return input * 0.8689758
}

function knotsToMph(input) {
	return input * 1.15078
}

function knotsToMach(input) {
	return input * 0.0015117824339371
}

function mphToMach(input) {
	return input * 0.001303
}

export const speedRoutes = [
	{
		method: 'GET',
		path: apiBasePath + 'mphToKnots/{input}',
		handler: (request, h) => {
			return mphToKnots(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'knotsToMph/{input}',
		handler: (request, h) => {
			return knotsToMph(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'knotsToMach/{input}',
		handler: (request, h) => {
			return knotsToMach(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'mphToMach/{input}',
		handler: (request, h) => {
			return mphToMach(request.params.input)
		}
	}
]