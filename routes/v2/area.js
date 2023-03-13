

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