

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