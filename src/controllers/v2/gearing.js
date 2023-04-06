function newGearRatio(newTireDiamIn, oldTireDiamIn, axleRatio) {
  return {
    newGearRatio: (newTireDiamIn / oldTireDiamIn) * axleRatio,
    newTireDiamIn: parseFloat(newTireDiamIn),
    oldTireDiamIn: parseFloat(oldTireDiamIn),
    oldAxleRatio: parseFloat(axleRatio)
  };
}

function effectiveGearRatio(newTireDiamIn, oldTireDiamIn, axleRatio) {
  return {
    effectiveGearRatio: (oldTireDiamIn / newTireDiamIn) * axleRatio,
    newTireDiamIn: parseFloat(newTireDiamIn),
    oldTireDiamIn: parseFloat(oldTireDiamIn),
    oldAxleRatio: parseFloat(axleRatio)
  };
}

function newGearRatioNeeded(newTireDiamIn, oldTireDiamIn, axleRatio) {
  const newGr = newGearRatio(newTireDiamIn, oldTireDiamIn, axleRatio);
  const effGr = effectiveGearRatio(newTireDiamIn, oldTireDiamIn, axleRatio);
  return {
    newGearRatioNeeded: Math.round(newGr.newGearRatio * 100) / 100,
    effectiveGearRatio: Math.round(effGr.effectiveGearRatio * 100) / 100,
    newTireDiamIn: parseFloat(newTireDiamIn),
    oldTireDiamIn: parseFloat(oldTireDiamIn),
    oldAxleRatio: parseFloat(axleRatio)
  };
}

function engineRpmAtSpeed(axleRatio, vehicleSpeedMph, transRatio, tireDiamIn) {
  // 336.13 is used to convert the result to RPM
  // [63360 inches per mile / (60 miles per hour * Pi)]
  const value = (axleRatio * vehicleSpeedMph * transRatio.ratio * 336.13) / tireDiamIn;
  return {
    engineRPM: value,
    axleRatio: parseFloat(axleRatio),
    vehicleSpeedMph: parseFloat(vehicleSpeedMph),
    transRatio: parseFloat(transRatio),
    tireDiamIn: parseFloat(tireDiamIn),
    attribution: 'http://www.crawlpedia.com/rpm_gear_calculator.htm'
  };
}

function vehicleSpeedAtEngineRpm(engineRpm, tireDiamIn, transRatio, auxRatio, tCaseRatio, axleRatio) {
  const drivetrainRatio = transRatio.ratio * auxRatio * tCaseRatio * axleRatio;
  const value = (0.00595 * (engineRpm * tireDiamIn)) / drivetrainRatio;
  return {
    vehicleSpeed: value,
    engineRpm: parseFloat(engineRpm),
    tireDiamIn: parseFloat(tireDiamIn),
    transRatio: parseFloat(transRatio),
    auxRatio: parseFloat(auxRatio),
    tCaseRatio: parseFloat(tCaseRatio),
    axleRatio: parseFloat(axleRatio),
    attribution1: 'http://www.public.asu.edu/~grover/willys/speed.html',
    attribution2: 'https://wahiduddin.net/calc/calc_speed_rpm.htm'
  };
}

function crawlRatio(axleRatio, lowTCaseRatio, transLowGearRatio, auxRatio) {
  const cr = Math.round(axleRatio * lowTCaseRatio * transLowGearRatio.ratio * auxRatio, 2);
  let verbose;
  if (cr < 50) {
    verbose = 'Factory style';
  } else if (cr >= 50 && cr < 80) {
    verbose = 'Backroads and trail use';
  } else if (cr >= 80 && cr < 110) {
    verbose = 'Intermediate trail use';
  } else if (cr >= 110 && cr < 135) {
    verbose = 'Ideal for crawling';
  } else {
    verbose = 'Excessive';
  }
  return {
    crawlRatio: cr,
    uses: verbose,
    axleRatio: parseFloat(axleRatio),
    lowTCaseRatio: parseFloat(lowTCaseRatio),
    transLowGearRatio: parseFloat(transLowGearRatio),
    auxRatio: parseFloat(auxRatio),
    attribution: 'https://www.offroadxtreme.com/news/off-road-101-what-is-crawl-ratio/',
    description: {
      'Under 50': 'Most factory setups fall here',
      '50-60s': 'Backroads and light trail use',
      '80s': 'Intermediate trail use',
      '110-130s': 'Ideal for crawling. It allows taking obstacles at a slow, controlled speed without riding the brakes or applying constant throttle to avoid stalling',
      'Over 130': 'Excessive with little to no additional benefit'
    }
  };
}

function rotationVelocity(axleRatio, speedMph, tireDiamIn) {
  const vel = (168 * axleRatio * speedMph) / (tireDiamIn / 2);
  return {
    rotationVelocity: Math.round(vel * 10000) / 10000,
    axleRatio: parseFloat(axleRatio),
    speedMph: parseFloat(speedMph),
    tireDiamIn: parseFloat(tireDiamIn),
    attribution: 'https://www.ajdesigner.com/phpgear/gear_equation_effective_gear_ratio.php'
  };
}

function calculateGearRatio(ringGearTeeth, pinionGearTeeth) {
  const value = ringGearTeeth / pinionGearTeeth;
  return {
    gearRatio: Math.round(value * 100) / 100,
    ringGearTeeth: parseFloat(ringGearTeeth),
    pinionGearTeeth: parseFloat(pinionGearTeeth)
  };
}

function actualSpeed(newTireDiamIn, oldTireDiamIn, speedoMph) {
  const value = (newTireDiamIn / oldTireDiamIn) * speedoMph;
  return {
    actualSpeed: Math.round(value * 100) / 100,
    newTireDiamIn: parseFloat(newTireDiamIn),
    oldTireDiamIn: parseFloat(oldTireDiamIn),
    speedoMph: parseFloat(speedoMph)
  };
}

module.exports = (app) => {
  app.get('/api/v2/Gearing/NewGearRatioNeeded/:newTireDiamIn/:oldTireDiamIn/:axleRatio', (req, res) => {
    // #swagger.tags = ['Gearing']
    /* #swagger.description = 'Determine the new gear ratio needed when moving to a different
        tire size to keep the overall ratio the same.Also provides the effective gear
        ratio with the current gearing and new tire size' */
    /* #swagger.parameters['newTireDiamIn'] = {
        in: 'path',
        description: 'Diameter in inches of new tire',
        type: 'number'
    } */
    /* #swagger.parameters['oldTireDiamIn'] = {
        in: 'path',
        description: 'Diameter in inches of old tire',
        type: 'number'
    } */
    /* #swagger.parameters['axleRatio'] = {
        in: 'path',
        description: 'Ring & pinion ratio before the colon, ex. 3.73',
        type: 'number'
    } */
    try {
      const { newTireDiamIn } = req.params;
      const { oldTireDiamIn } = req.params;
      const { axleRatio } = req.params;
      const calcs = newGearRatioNeeded(newTireDiamIn, oldTireDiamIn, axleRatio);
      res.json(calcs);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Gearing/EngineRpmAtSpeed/:axleRatio/:vehicleSpeedMph/:transRatio/:tireDiamIn', (req, res) => {
    // #swagger.tags = ['Gearing']
    /* #swagger.description = 'Determine the engine RPM at a given speed for the combination of the
        axle ratio, transmission gear and tire diameter' */
    /* #swagger.parameters['axleRatio'] = {
        in: 'path',
        description: 'Ring & pinion ratio before the colon, ex. 3.73',
        type: 'number'
    } */
    /* #swagger.parameters['vehicleSpeedMph'] = {
        in: 'path',
        description: 'Vehicle speed in MPH',
        type: 'number'
    } */
    /* #swagger.parameters['transRatio'] = {
        in: 'path',
        description: 'Transmission ratio before the colon, ex. 2.54',
        type: 'number'
    } */
    /* #swagger.parameters['tireDiamIn'] = {
        in: 'path',
        description: 'Diameter in inches of tire',
        type: 'number'
    } */
    try {
      const { axleRatio } = req.params;
      const { vehicleSpeedMph } = req.params;
      const { transRatio } = req.params;
      const { tireDiamIn } = req.params;
      const calcs = engineRpmAtSpeed(axleRatio, vehicleSpeedMph, transRatio, tireDiamIn)
      res.json(calcs);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Gearing/VehicleSpeedAtEngineRpm/:engineRpm/:tireDiamIn/:transRatio/:auxRatio/:tCaseRatio/:axleRatio', (req, res) => {
    // #swagger.tags = ['Gearing']
    /* #swagger.description = 'Determine the vehicle speed at a given engine RPM for the
        combination of the tire diameter, transmission gear,
        overdrive (if equipped, else 1, can also be used to figure a second transfer case),
        transfer case (high or low gear as needed), and axle ratio' */
    /* #swagger.parameters['engineRpm'] = {
        in: 'path',
        description: 'RPM of the engine',
        type: 'number'
    } */
    /* #swagger.parameters['tireDiamIn'] = {
        in: 'path',
        description: 'Diameter in inches of tire',
        type: 'number'
    } */
    /* #swagger.parameters['transRatio'] = {
        in: 'path',
        description: 'Transmission ratio before the colon, ex. 2.54',
        type: 'number'
    } */
    /* #swagger.parameters['auxRatio'] = {
        in: 'path',
        description: 'auxRatio Overdrive or second transfer case ratio before the colon,
          ex. 4.0. or 1 if not equipped',
        type: 'number'
    } */
    /* #swagger.parameters['tCaseRatio'] = {
        in: 'path',
        description: 'Transfer case ratio before the colon, ex. 2.72',
        type: 'number'
    } */
    /* #swagger.parameters['axleRatio'] = {
        in: 'path',
        description: 'Ring & pinion ratio before the colon, ex. 3.73',
        type: 'number'
    } */
    try {
      const { engineRpm } = req.params;
      const { tireDiamIn } = req.params;
      const { transRatio } = req.params;
      const { auxRatio } = req.params;
      const { tCaseRatio } = req.params;
      const { axleRatio } = req.params;
      const tireDiam = tireDiamIn / 2;
      const calcs = vehicleSpeedAtEngineRpm(engineRpm, tireDiamIn, transRatio, auxRatio, tCaseRatio, axleRatio);
      res.json(calcs);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Gearing/CrawlRatio/:axleRatio/:lowTCaseRatio/:transLowGearRatio/:auxRatio', (req, res) => {
    // #swagger.tags = ['Gearing']
    /* #swagger.description = 'Determine the crawl ratio for the provided parameters' */
    /* #swagger.parameters['axleRatio'] = {
        in: 'path',
        description: 'Ring & pinion ratio before the colon, ex. 3.73',
        type: 'number'
    } */
    /* #swagger.parameters['lowTCaseRatio'] = {
        in: 'path',
        description: 'Transfer case ratio before the colon, ex. 2.72',
        type: 'number'
    } */
    /* #swagger.parameters['transLowGearRatio'] = {
        in: 'path',
        description: 'Transmission ratio before the colon, ex. 2.54',
        type: 'number'
    } */
    /* #swagger.parameters['auxRatio'] = {
        in: 'path',
        description: 'auxRatio Overdrive or second transfer case ratio before the colon,
          ex. 4.0. or 1 if not equipped',
        type: 'number'
    } */
    try {
      const { axleRatio } = req.params;
      const { lowTCaseRatio } = req.params;
      const { transLowGearRatio } = req.params;
      const { auxRatio } = req.params;
      const calcs = crawlRatio(axleRatio, lowTCaseRatio, transLowGearRatio, auxRatio);
      res.json(calcs);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Gearing/RotationVelocity/:axleRatio/:speedMph/:tireDiamIn', (req, res) => {
    // #swagger.tags = ['Gearing']
    /* #swagger.description = 'Determine the rotation velocity which is how fast
        an object rotates or revolves relative to another point' */
    /* #swagger.parameters['axleRatio'] = {
        in: 'path',
        description: 'Ring & pinion ratio before the colon, ex. 3.73',
        type: 'number'
    } */
    /* #swagger.parameters['speedMph'] = {
        in: 'path',
        description: 'Vehicle speed in MPH',
        type: 'number'
    } */
    /* #swagger.parameters['tireDiamIn'] = {
        in: 'path',
        description: 'Diameter in inches of tire',
        type: 'number'
    } */
    try {
      const { axleRatio } = req.params;
      const { speedMph } = req.params;
      const { tireDiamIn } = req.params;
      const calcs = rotationVelocity(axleRatio, speedMph, tireDiamIn);
      res.json(calcs);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Gearing/CalculateGearRatio/:ringGearTeeth/:pinionGearTeeth', (req, res) => {
    // #swagger.tags = ['Gearing']
    // #swagger.description = 'Determine the gear ratio by counting teeth on the ring and pinion'
    /* #swagger.parameters['ringGearTeeth'] = {
        in: 'path',
        description: 'Number of teeth on the ring gear',
        type: 'number'
    } */
    /* #swagger.parameters['pinionGearTeeth'] = {
        in: 'path',
        description: 'Number of teeth on the pinion gear',
        type: 'number'
    } */
    try {
      const { ringGearTeeth } = req.params;
      const { pinionGearTeeth } = req.params;
      const calcs = calculateGearRatio(ringGearTeeth, pinionGearTeeth);
      res.json(calcs);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.get('/api/v2/Gearing/ActualSpeed/:newTireDiamIn/:oldTireDiamIn/:speedoMph', (req, res) => {
    // #swagger.tags = ['Gearing']
    /* #swagger.description = 'Determine actual speed when changing tire sizes and not regearing.
          The speedometer is still calibrated at factory specs and this will show what
        speed you are actually running' */
    /* #swagger.parameters['newTireDiamIn'] = {
        in: 'path',
        description: 'Diameter in inches of new tire',
        type: 'number'
    } */
    /* #swagger.parameters['oldTireDiamIn'] = {
        in: 'path',
        description: 'Diameter in inches of old tire',
        type: 'number'
    } */
    /* #swagger.parameters['speedoMph'] = {
        in: 'path',
        description: 'Vehicle speed in MPH as read on the speedometer',
        type: 'number'
    } */
    try {
      const { newTireDiamIn } = req.params;
      const { oldTireDiamIn } = req.params;
      const { speedoMph } = req.params;
      const calcs = actualSpeed(newTireDiamIn, oldTireDiamIn, speedoMph);
      res.json(calcs);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  app.post('/api/v2/Gearing/Change', (req, res) => {
    // #swagger.tags = ['Gearing']
    /* #swagger.description = 'Run several calculations when changing tires and gears' */
    /* #swagger.parameters['input'] = {
        in: 'body',
        description: 'Object with required values',
        schema: { $ref: '#/definitions/GearingChange'}
    } */
    try {
      const { oldTireDiamIn } = req.body;
      const { newTireDiamIn } = req.body;
      const { oldAxleRatio } = req.body;
      const { newAxleRatio } = req.body;
      const { tCaseLowRatio } = req.body;
      const { auxRatio } = req.body;
      const { transRatioGearList } = req.body;
      const { maxRpm } = req.body;
      const { minRpm } = req.body;
      const roadSpeeds = ['10', '30', '45', '55', '70'];
      const engineRpms = ['750', '1000', '1500', '2000', '2500', '3000'];

      // Effective Gear Ratio
      const effectiveGR = effectiveGearRatio(newTireDiamIn, oldTireDiamIn, newAxleRatio);

      // New Gear Ratio Needed
      const newGRNeeded = newGearRatioNeeded(newTireDiamIn, oldTireDiamIn, oldAxleRatio);

      // Crawl ratio
      const cr = crawlRatio(newAxleRatio, tCaseLowRatio, transRatioGearList[0], auxRatio);

      // Engine RPM at multiple road speeds
      const newEngRpmAtSpeeds = [];
      roadSpeeds.forEach(speed => {
        transRatioGearList.forEach(transGear => {
          const value = engineRpmAtSpeed(newAxleRatio, speed, transGear, newTireDiamIn);
          if (value.engineRPM <= maxRpm && value.engineRPM >= minRpm) {
            newEngRpmAtSpeeds.push({
              roadSpeed: speed,
              transRatio: transGear,
              engineRpm: value.engineRPM
            });
          }
        });
      });

      const oldEngRpmAtSpeeds = [];
      roadSpeeds.forEach(speed => {
        transRatioGearList.forEach(transGear => {
          const value = engineRpmAtSpeed(oldAxleRatio, speed, transGear, oldTireDiamIn);
          if (value.engineRPM <= maxRpm && value.engineRPM >= minRpm) {
            oldEngRpmAtSpeeds.push({
              roadSpeed: speed,
              transRatio: transGear,
              engineRpm: value.engineRPM
            });
          }
        });
      });

      // Vehicle speed at multiple engine RPM
      const newVehSpeedAtEngRpm = [];
      engineRpms.forEach((rpm) => {
        transRatioGearList.forEach((transGear) => {
          const value = vehicleSpeedAtEngineRpm(rpm, newTireDiamIn, transGear, 1, 1, newAxleRatio);
          newVehSpeedAtEngRpm.push({
            engineRpm: rpm.vehicleSpeed,
            transRatio: transGear,
            roadSpeed: value.vehicleSpeed
          });
        });
      });

      const oldVehSpeedAtEngRpm = [];
      engineRpms.forEach((rpm) => {
        transRatioGearList.forEach((transGear) => {
          const value = vehicleSpeedAtEngineRpm(rpm, newTireDiamIn, transGear, 1, 1, newAxleRatio);
          oldVehSpeedAtEngRpm.push({
            engineRpm: rpm.vehicleSpeed,
            transRatio: transGear,
            roadSpeed: value.vehicleSpeed
          });
        });
      });

      // Actual Speed at multiple road speeds
      const actSpeed = roadSpeeds.map(speed => {
        return actualSpeed(newTireDiamIn, oldTireDiamIn, speed);
      });

      res.json({
        effectiveGearRatio: effectiveGR.effectiveGearRatio,
        newGearRatioNeeded: newGRNeeded.newGearRatioNeeded,
        crawlRatio: cr,
        newEngineRpmAtSpeeds: newEngRpmAtSpeeds,
        oldEngineRpmAtSpeeds: oldEngRpmAtSpeeds,
        newVehicleSpeedAtEngineRpm: newVehSpeedAtEngRpm,
        oldVehicleSpeedAtEngineRpm: oldVehSpeedAtEngRpm,
        actualSpeeds: actSpeed
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
};
