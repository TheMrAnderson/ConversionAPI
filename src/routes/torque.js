const apiBasePath = '/api/v2/Torque/';

function gramCentimeterToDyneCentimeter(input) {
  return input * 981;
}

function gramCentimeterToKilogramMeter(input) {
  return input * 0.000001;
}

function gramCentimeterToNewtonMeter(input) {
  return input * 0.0000981;
}

function gramCentimeterToOunceInch(input) {
  return input * 0.01388736;
}

function gramCentimeterToPoundFoot(input) {
  return input * 0.0000724;
}

function milliNewtonMeterToOunceInch(input) {
  return input * 0.141612;
}

function newtonCentimeterToOunceInch(input) {
  return input * 1.41612;
}

function newtonMeterToOunceInch(input) {
  return input * 141.612;
}

function ounceInchToDyneCentimeter(input) {
  return input * 70600;
}

function ounceInchToKilogramMeter(input) {
  return input * 0.00072;
}

function ounceInchToMilliNewtonMeter(input) {
  return input * 7.061548;
}

function ounceInchToNewtonCentimeter(input) {
  return input * 0.7061548;
}

function ounceInchToNewtonMeter(input) {
  return input * 0.00706;
}

function ounceInchToPoundFoot(input) {
  return input * 0.00521;
}

function ounceInchToPoundInch(input) {
  return input * 0.0625;
}

function newtonMeterToPoundFoot(input) {
  return input * 0.7375621483695506;
}

function poundFootToNewtonMeter(input) {
  return input * 1.35581795;
}

export const torqueRoutes = [
  {
    method: 'GET',
    path: `${apiBasePath}GramCentimeterToDyneCentimeter/{input}`,
    handler: (request) => gramCentimeterToDyneCentimeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}GramCentimeterToKilogramMeter/{input}`,
    handler: (request) => gramCentimeterToKilogramMeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}GramCentimeterToNewtonMeter/{input}`,
    handler: (request) => gramCentimeterToNewtonMeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}GramCentimeterToOunceInch/{input}`,
    handler: (request) => gramCentimeterToOunceInch(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}GramCentimeterToPoundFoot/{input}`,
    handler: (request) => gramCentimeterToPoundFoot(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}MilliNewtonMeterToOunceInch/{input}`,
    handler: (request) => milliNewtonMeterToOunceInch(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}NewtonCentimeterToOunceInch/{input}`,
    handler: (request) => newtonCentimeterToOunceInch(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}NewtonMeterToOunceInch/{input}`,
    handler: (request) => newtonMeterToOunceInch(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}OunceInchToDyneCentimeter/{input}`,
    handler: (request) => ounceInchToDyneCentimeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}OunceInchToKilogramMeter/{input}`,
    handler: (request) => ounceInchToKilogramMeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}OunceInchToMilliNewtonMeter/{input}`,
    handler: (request) => ounceInchToMilliNewtonMeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}OunceInchToNewtonCentimeter/{input}`,
    handler: (request) => ounceInchToNewtonCentimeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}OunceInchToNewtonMeter/{input}`,
    handler: (request) => ounceInchToNewtonMeter(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}OunceInchToPoundFoot/{input}`,
    handler: (request) => ounceInchToPoundFoot(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}OunceInchToPoundInch/{input}`,
    handler: (request) => ounceInchToPoundInch(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}NewtonMeterToPoundFoot/{input}`,
    handler: (request) => newtonMeterToPoundFoot(request.params.input)
  },
  {
    method: 'GET',
    path: `${apiBasePath}poundFootToNewtonMeter/{input}`,
    handler: (request) => poundFootToNewtonMeter(request.params.input)
  }
];
