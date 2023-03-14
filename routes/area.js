const apiBasePath = '/api/v2/area/';

function acreToFoot2(input) {
  return input * 43560;
}

function acreToMile2(input) {
  return input * 0.0015625;
}

function acreToYard2(input) {
  return input * 4840;
}

function foot2ToAcre(input) {
  return input / 43560;
}

function foot2ToInch2(input) {
  return input * 144;
}

function inch2ToFoot2(input) {
  return input / 144;
}

function inch2ToYard2(input) {
  return input / 1296;
}

function mile2ToAcre(input) {
  return input * 640;
}

function rod2ToYard2(input) {
  return input * 30.25;
}

function yard2ToAcre(input) {
  return input / 4840;
}

function yard2ToInch2(input) {
  return input * 1296;
}

function yard2ToRod2(input) {
  return input * 0.0330578512396694;
}

function circumference(input) {
  return input * 3.14159265359;
}

export const areaRoutes = [
  {
    method: 'GET',
    path: `${apiBasePath}acreToFoot2/{input}`,
    handler: (request) => acreToFoot2(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}acreToMile2/{input}`,
    handler: (request) => acreToMile2(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}acreToYard2/{input}`,
    handler: (request) => acreToYard2(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}foot2ToAcre/{input}`,
    handler: (request) => foot2ToAcre(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}foot2ToInch2/{input}`,
    handler: (request) => foot2ToInch2(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}inch2ToFoot2/{input}`,
    handler: (request) => inch2ToFoot2(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}inch2ToYard2/{input}`,
    handler: (request) => inch2ToYard2(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}mile2ToAcre/{input}`,
    handler: (request) => mile2ToAcre(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}rod2ToYard2/{input}`,
    handler: (request) => rod2ToYard2(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}yard2ToAcre/{input}`,
    handler: (request) => yard2ToAcre(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}yard2ToInch2/{input}`,
    handler: (request) => yard2ToInch2(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}yard2ToRod2/{input}`,
    handler: (request) => yard2ToRod2(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}circumference/{input}`,
    handler: (request) => circumference(request.params.input)
  }
];
