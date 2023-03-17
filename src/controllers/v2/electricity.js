function batteryRuntimeHours(loadWattage, batteryAh) {
  const ampLoad = loadWattage / 12;
  return batteryAh / ampLoad / 2;
}

/**
   * Handle the parsing of optional parameters
   * @param {*} options request.params
   * @param {*} name name of the parameter
   * @param {*} def default value
   * @returns
   */
function opt(options, name, def) {
  return options && options[name] !== undefined ? options[name] : def;
}

function getOhmsVoltAmp(volts, amps) {
  return volts / amps;
}

function getOhmsWattAmp(watts, amps) {
  return watts / (amps * amps);
}

function getOhmsVoltWatt(volts, watts) {
  return ((volts * volts) / watts);
}

function getAmpsVoltOhm(volts, ohms) {
  return volts / ohms;
}

function getAmpsWattVolt(watts, volts) {
  return watts / volts;
}

function getAmpsWattOhm(watts, ohms) {
  return Math.sqrt((watts / ohms));
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

module.exports = function (app) {
  app.get('/BatteryRuntimeHours/:loadWattage/:batteryAh', (req, res) => {
    // #swagger.tags = ['Electricity']
    try {
      const { loadWattage } = req.params;
      const { batteryAh } = req.params;
      res.json({ runtimeHours: batteryRuntimeHours(loadWattage, batteryAh) });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/BatteryRuntimeMinutes/:loadWattage/:batteryAh', (req, res) => {
    // #swagger.tags = ['Electricity']
    try {
      const { loadWattage } = req.params;
      const { batteryAh } = req.params;
      res.json({ runtimeMinutes: batteryRuntimeHours(loadWattage, batteryAh) / 60 });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Ohms', (req, res) => {
    // #swagger.tags = ['Electricity']
    // #swagger.description = 'Get ohms by supplying any 2 of the parameters'
    /* #swagger.parameters['volts'] = {
        in: 'query',
        required: 'false',
        type: 'number'
    } */
    /* #swagger.parameters['watts'] = {
        in: 'query',
        required: 'false',
        type: 'number'
    } */
    /* #swagger.parameters['amps'] = {
        in: 'query',
        required: 'false',
        type: 'number'
    } */
    try {
      if (Object.keys(req.query).length !== 2) {
        res.status(400).json({ error: 'Must supply exactly 2 parameters' });
        return;
      }
      const volts = opt(req.query, 'volts', undefined);
      const amps = opt(req.query, 'amps', undefined);
      const watts = opt(req.query, 'watts', undefined);
      let value;
      let status = 200;
      if (volts !== undefined && amps !== undefined) {
        value = getOhmsVoltAmp(volts, amps);
      }
      if (watts !== undefined && amps !== undefined) {
        value = getOhmsWattAmp(watts, amps);
      }
      if (volts !== undefined && watts !== undefined) {
        value = getOhmsVoltWatt(volts, watts);
      }
      if (value === undefined) {
        value = { error: 'Unknown value mix supplied' };
        status = 400;
      }
      res.status(status).json({
        ohms: value,
        volts: parseFloat(volts),
        amps: parseFloat(amps),
        watts: parseFloat(watts)
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Amps', (req, res) => {
    // #swagger.tags = ['Electricity']
    // #swagger.description = 'Get amps by supplying any 2 of the parameters'
    /* #swagger.parameters['volts'] = {
        in: 'query',
        required: 'false',
        type: 'number'
    } */
    /* #swagger.parameters['watts'] = {
        in: 'query',
        required: 'false',
        type: 'number'
    } */
    /* #swagger.parameters['ohms'] = {
        in: 'query',
        required: 'false',
        type: 'number'
    } */
    try {
      if (Object.keys(req.query).length !== 2) {
        res.status(400).json({ error: 'Must supply exactly 2 parameters' });
        return;
      }
      const volts = opt(req.query, 'volts', undefined);
      const ohms = opt(req.query, 'ohms', undefined);
      const watts = opt(req.query, 'watts', undefined);
      let value;
      let status = 200;
      if (volts !== undefined && ohms !== undefined) {
        value = getAmpsVoltOhm(volts, ohms);
      }
      if (watts !== undefined && volts !== undefined) {
        value = getAmpsWattVolt(watts, volts);
      }
      if (watts !== undefined && ohms !== undefined) {
        value = getAmpsWattOhm(watts, ohms);
      }
      if (value === undefined) {
        value = { error: 'Unknown value mix supplied' };
        status = 400;
      }
      res.status(status).json({
        ohms: parseFloat(ohms),
        volts: parseFloat(volts),
        amps: value,
        watts: parseFloat(watts)
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Volts', (req, res) => {
    // #swagger.tags = ['Electricity']
    // #swagger.description = 'Get volts by supplying any 2 of the parameters'
    /* #swagger.parameters['amps'] = {
        in: 'query',
        required: 'false',
        type: 'number'
    } */
    /* #swagger.parameters['watts'] = {
        in: 'query',
        required: 'false',
        type: 'number'
    } */
    /* #swagger.parameters['ohms'] = {
        in: 'query',
        required: 'false',
        type: 'number'
    } */
    try {
      if (Object.keys(req.query).length !== 2) {
        res.status(400).json({ error: 'Must supply exactly 2 parameters' });
        return;
      }
      const amps = opt(req.query, 'amps', undefined);
      const watts = opt(req.query, 'watts', undefined);
      const ohms = opt(req.query, 'ohms', undefined);
      let value;
      let status = 200;
      if (amps !== undefined && ohms !== undefined) {
        value = getVoltsAmpOhm(amps, ohms);
      }
      if (watts !== undefined && amps !== undefined) {
        value = getVoltsWattAmp(watts, amps);
      }
      if (watts !== undefined && ohms !== undefined) {
        value = getVoltsWattOhm(watts, ohms);
      }
      if (value === undefined) {
        value = { error: 'Unknown value mix supplied' };
        status = 400;
      }
      res.status(status).json({
        ohms: parseFloat(ohms),
        volts: value,
        amps: parseFloat(amps),
        watts: parseFloat(watts)
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/Watts', (req, res) => {
    // #swagger.tags = ['Electricity']
    // #swagger.description = 'Get watts by supplying any 2 of the parameters'
    /* #swagger.parameters['volts'] = {
        in: 'query',
        required: 'false',
        type: 'number'
    } */
    /* #swagger.parameters['ohms'] = {
        in: 'query',
        required: 'false',
        type: 'number'
    } */
    /* #swagger.parameters['amps'] = {
        in: 'query',
        required: 'false',
        type: 'number'
    } */
    try {
      if (Object.keys(req.query).length !== 2) {
        res.status(400).json({ error: 'Must supply exactly 2 parameters' });
        return;
      }
      const volts = opt(req.query, 'volts', undefined);
      const ohms = opt(req.query, 'ohms', undefined);
      const amps = opt(req.query, 'amps', undefined);
      let value;
      let status = 200;
      if (volts !== undefined && amps !== undefined) {
        value = getWattsVoltAmp(volts, amps);
      }
      if (volts !== undefined && ohms !== undefined) {
        value = getWattsVoltOhm(volts, ohms);
      }
      if (amps !== undefined && ohms !== undefined) {
        value = getWattsAmpOhm(amps, ohms);
      }
      if (value === undefined) {
        value = { error: 'Unknown value mix supplied' };
        status = 400;
      }
      res.status(status).json({
        ohms: parseFloat(ohms),
        volts: parseFloat(volts),
        amps: parseFloat(amps),
        watts: value
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
};
