'use strict'

const apiBasePath = '/api/v2/area/'

function acreToFoot2(input) {
	return input * 43560
}


function acreToMile2(input) {
	return input * 0.0015625
}


function acreToYard2(input) {
	return input * 4840
}


function foot2ToAcre(input) {
	return input / 43560
}


function foot2ToInch2(input) {
	return input * 144
}


function inch2ToFoot2(input) {
	return input / 144
}


function inch2ToYard2(input) {
	return input / 1296
}


function mile2ToAcre(input) {
	return input * 640
}


function rod2ToYard2(input) {
	return input * 30.25
}


function yard2ToAcre(input) {
	return input / 4840
}


function yard2ToInch2(input) {
	return input * 1296
}


function yard2ToRod2(input) {
	return input * 0.0330578512396694
}


function circumference(input) {
	return input * 3.14159265359
}

export const areaRoutes = [
	{
		method: 'GET',
		path: apiBasePath + 'acreToFoot2/{input}',
		handler: (request, h) => {
			return acreToFoot2(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'acreToMile2/{input}',
		handler: (request, h) => {
			return acreToMile2(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'acreToYard2/{input}',
		handler: (request, h) => {
			return acreToYard2(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'foot2ToAcre/{input}',
		handler: (request, h) => {
			return foot2ToAcre(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'foot2ToInch2/{input}',
		handler: (request, h) => {
			return foot2ToInch2(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'inch2ToFoot2/{input}',
		handler: (request, h) => {
			return inch2ToFoot2(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'inch2ToYard2/{input}',
		handler: (request, h) => {
			return inch2ToYard2(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'mile2ToAcre/{input}',
		handler: (request, h) => {
			return mile2ToAcre(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'rod2ToYard2/{input}',
		handler: (request, h) => {
			return rod2ToYard2(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'yard2ToAcre/{input}',
		handler: (request, h) => {
			return yard2ToAcre(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'yard2ToInch2/{input}',
		handler: (request, h) => {
			return yard2ToInch2(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'yard2ToRod2/{input}',
		handler: (request, h) => {
			return yard2ToRod2(request.params.input)
		}
	},
	{
		method: 'GET',
		path: apiBasePath + 'circumference/{input}',
		handler: (request, h) => {
			return circumference(request.params.input)
		}
	}
]