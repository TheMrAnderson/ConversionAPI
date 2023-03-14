const apiBasePath = '/api/v2/Length/';

function millimeterToInch(input) {
  return input / 25.4;
}

function centimeterToInch(input) {
  return input / 2.54;
}

function footToMillimeter(input) {
  return input * 304.8;
}

function inchToCentimeter(input) {
  return input * 2.54;
}

function inchToMiliimeter(input) {
  return input * 25.4;
}

function kilometerToMile(input) {
  return input * 0.6214;
}

function meterToFoot(input) {
  return input * 3.2808;
}

function meterToInch(input) {
  return input * 39.37007874;
}

function mileToKilometer(input) {
  return input * 1.609;
}

function micrometerToInch(input) {
  return input * 0.000039370079;
}

function yardToMillimeter(input) {
  return input * 914.4;
}

function rackUToInch(input) {
  return input * 1.75;
}

function inchToRackU(input) {
  return input / 1.75;
}

function inchToHand(input) {
  return input / 4;
}

function handToInch(input) {
  return input * 4;
}

export const lengthRoutes = [
  {
    method: 'GET',
    path: `${apiBasePath}millimeterToInch/{input}`,
    handler: (request) => millimeterToInch(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}centimeterToInch/{input}`,
    handler: (request) => centimeterToInch(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}footToMillimeter/{input}`,
    handler: (request) => footToMillimeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}inchToCentimeter/{input}`,
    handler: (request) => inchToCentimeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}inchToMiliimeter/{input}`,
    handler: (request) => inchToMiliimeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}kilometerToMile/{input}`,
    handler: (request) => kilometerToMile(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}meterToFoot/{input}`,
    handler: (request) => meterToFoot(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}meterToInch/{input}`,
    handler: (request) => meterToInch(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}mileToKilometer/{input}`,
    handler: (request) => mileToKilometer(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}micrometerToInch/{input}`,
    handler: (request) => micrometerToInch(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}yardToMillimeter/{input}`,
    handler: (request) => yardToMillimeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}rackUToInch/{input}`,
    handler: (request) => rackUToInch(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}inchToRackU/{input}`,
    handler: (request) => inchToRackU(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}inchToHand/{input}`,
    handler: (request) => inchToHand(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}handToInch/{input}`,
    handler: (request) => handToInch(request.params.input)
  }
];
