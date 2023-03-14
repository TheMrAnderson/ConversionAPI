const apiBasePath = '/api/v2/electricity/';

function getBatteryRuntimeHours(loadWattage, batteryAh) {
  const ampLoad = loadWattage / 12;
  return batteryAh / ampLoad / 2;
}

function getBatteryRuntimeMinutes(loadWattage, batteryAh) {
  return getBatteryRuntimeHours(loadWattage, batteryAh) / 60;
}

function getOhmsVoltAmp(volts, amps) {
  return volts / amps;
}

function getOhmsWattAmp(watts, amps) {
  return watts / (amps * amps);
}

function getOhmsVoltWatt(volts, watts) {
  return (volts * volts) / watts;
}

function getAmpsVoltOhm(volts, ohms) {
  return volts / ohms;
}

function getAmpsWattVolt(watts, volts) {
  return watts / volts;
}

function getAmpsWattOhm(watts, ohms) {
  Math.sqrt((watts / ohms));
}

function getVoltsAmpOhm(amps, ohms) {
  return amps * ohms;
}

function getVoltsWattAmp(watts, amps) {
  return watts / amps;
}

function getVoltsWattOhm(watts, ohms) {
  return Math.sqrt((watts * ohms));
}

function getWattsVoltAmp(volts, amps) {
  return volts * amps;
}

function getWattsVoltOhm(volts, ohms) {
  return (volts * volts) / ohms;
}

function getWattsAmpOhm(amps, ohms) {
  return (amps * amps) / ohms;
}

export const electricityRoutes = [
  {
    method: 'GET',
    path: `${apiBasePath}batteryRuntimeHours/{loadWattage}/{batteryAh}`,
    handler: (request) => getBatteryRuntimeHours(
      request.params.loadWattage,
      request.params.batteryAh
    ),
    method: 'GET',
    path: `${apiBasePath}batteryRuntimeMinutes/{loadWattage}/{batteryAh}`,
    handler: (request) => getBatteryRuntimeMinutes(
      request.params.loadWattage,
      request.params.batteryAh
    ),
    method: 'GET',
    path: `${apiBasePath}getOhmsVoltAmp/{volts}/{amps}`,
    handler: (request) => getOhmsVoltAmp(
      request.params.volts,
      request.params.amps
    ),
    method: 'GET',
    path: `${apiBasePath}getOhmsWattAmp/{watts}/{amps}`,
    handler: (request) => getOhmsWattAmp(
      request.params.watts,
      request.params.amps
    ),
    method: 'GET',
    path: `${apiBasePath}getOhmsVoltWatt/{volts}/{amps}`,
    handler: (request) => getOhmsVoltWatt(
      request.params.volts,
      request.params.amps
    ),
    method: 'GET',
    path: `${apiBasePath}getAmpsVoltOhm/{volts}/{ohms}`,
    handler: (request) => getAmpsVoltOhm(
      request.params.volts,
      request.params.ohms
    ),
    method: 'GET',
    path: `${apiBasePath}getAmpsWattVolt/{watts}/{volts}`,
    handler: (request) => getAmpsWattVolt(
      request.params.watts,
      request.params.volts
    ),
    method: 'GET',
    path: `${apiBasePath}getAmpsWattOhm/{watts}/{ohms}`,
    handler: (request) => getAmpsWattOhm(
      request.params.watts,
      request.params.ohms
    ),
    method: 'GET',
    path: `${apiBasePath}getVoltsAmpOhm/{amps}/{ohms}`,
    handler: (request) => getVoltsAmpOhm(
      request.params.amps,
      request.params.ohms
    ),
    method: 'GET',
    path: `${apiBasePath}getVoltsWattAmp/{watts}/{amps}`,
    handler: (request) => getVoltsWattAmp(
      request.params.watts,
      request.params.amps
    ),
    method: 'GET',
    path: `${apiBasePath}getVoltsWattOhm/{watts}/{ohms}`,
    handler: (request) => getVoltsWattOhm(
      request.params.watts,
      request.params.ohms
    ),
    method: 'GET',
    path: `${apiBasePath}getWattsVoltAmp/{volts}/{amps}`,
    handler: (request) => getWattsVoltAmp(
      request.params.volts,
      request.params.amps
    ),
    method: 'GET',
    path: `${apiBasePath}getWattsVoltOhm/{volts}/{ohms}`,
    handler: (request) => getWattsVoltOhm(
      request.params.volts,
      request.params.ohms
    ),
    method: 'GET',
    path: `${apiBasePath}getWattsAmpOhm/{amps}/{ohms}`,
    handler: (request) => getWattsAmpOhm(
      request.params.amps,
      request.params.ohms
    )
  }
];
