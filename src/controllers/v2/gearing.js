module.exports = function (app) {
  function newGearRatio(newTireDiamIn, oldTireDiamIn, axleRatio) {
    return (newTireDiamIn / oldTireDiamIn) * axleRatio;
  }

  function effectiveGearRatio(newTireDiamIn, oldTireDiamIn, axleRatio) {
    return (oldTireDiamIn / newTireDiamIn) * axleRatio;
  }

  const newGearRatioNeeded = (req, res) => {
    try {
      const { newTireDiamIn } = req.params;
      const { oldTireDiamIn } = req.params;
      const { axleRatio } = req.params;
      const newGr = newGearRatio(newTireDiamIn, oldTireDiamIn, axleRatio);
      const effGr = effectiveGearRatio(newTireDiamIn, oldTireDiamIn, axleRatio);
      res.json({
        newGearRatioNeeded: Math.round(newGr * 100) / 100,
        effectiveGearRatio: Math.round(effGr * 100) / 100,
        newTireDiamIn: parseFloat(newTireDiamIn),
        oldTireDiamIn: parseFloat(oldTireDiamIn),
        oldAxleRatio: parseFloat(axleRatio)
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const engineRpmAtSpeed = (req, res) => {
    try {
      const { axleRatio } = req.params;
      const { vehicleSpeedMph } = req.params;
      const { transRatio } = req.params;
      const { tireDiamIn } = req.params;
      // 336.13 is used to convert the result to RPM
      // [63360 inches per mile / (60 miles per hour * Pi)]
      const value = (axleRatio * vehicleSpeedMph * transRatio * 336.13) / tireDiamIn;
      res.json({
        engineRPM: value,
        axleRatio: parseFloat(axleRatio),
        vehicleSpeedMph: parseFloat(vehicleSpeedMph),
        transRatio: parseFloat(transRatio),
        tireDiamIn: parseFloat(tireDiamIn),
        attribution: 'http://www.crawlpedia.com/rpm_gear_calculator.htm'
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const vehicleSpeedAtEngineRpm = (req, res) => {
    try {
      const { engineRpm } = req.params;
      const { tireDiamIn } = req.params;
      const { transRatio } = req.params;
      const { auxRatio } = req.params;
      const { tCaseRatio } = req.params;
      const { axleRatio } = req.params;
      const tireDiam = tireDiamIn / 2;
      const drivetrainRatio = transRatio * auxRatio * tCaseRatio * axleRatio;
      const value = (0.00595 * (engineRpm * tireDiam)) / drivetrainRatio;
      res.json({
        vehicleSpeed: value,
        engineRpm: parseFloat(engineRpm),
        tireDiamIn: parseFloat(tireDiamIn),
        transRatio: parseFloat(transRatio),
        auxRatio: parseFloat(auxRatio),
        tCaseRatio: parseFloat(tCaseRatio),
        axleRatio: parseFloat(axleRatio),
        attribution1: 'http://www.public.asu.edu/~grover/willys/speed.html',
        attribution2: 'https://wahiduddin.net/calc/calc_speed_rpm.htm'
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const crawlRatio = (req, res) => {
    try {
      const { axleRatio } = req.params;
      const { lowTCaseRatio } = req.params;
      const { transLowGearRatio } = req.params;
      const { auxRatio } = req.params;
      const cr = Math.round(axleRatio * lowTCaseRatio * transLowGearRatio * auxRatio, 2);
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
      res.json({
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
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const rotationVelocity = (req, res) => {
    try {
      const { axleRatio } = req.params;
      const { speedMph } = req.params;
      const { tireDiamIn } = req.params;
      const vel = (168 * axleRatio * speedMph) / (tireDiamIn / 2);
      res.json({
        rotationVelocity: Math.round(vel * 10000) / 10000,
        axleRatio: parseFloat(axleRatio),
        speedMph: parseFloat(speedMph),
        tireDiamIn: parseFloat(tireDiamIn),
        attribution: 'https://www.ajdesigner.com/phpgear/gear_equation_effective_gear_ratio.php'
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const calculateGearRatio = (req, res) => {
    try {
      const { ringGearTeeth } = req.params;
      const { pinionGearTeeth } = req.params;
      const value = ringGearTeeth / pinionGearTeeth;
      res.json({
        gearRatio: Math.round(value * 100) / 100,
        ringGearTeeth: parseFloat(ringGearTeeth),
        pinionGearTeeth: parseFloat(pinionGearTeeth)
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };

  const actualSpeed = (req, res) => {
    try {
      const { newTireDiamIn } = req.params;
      const { oldTireDiamIn } = req.params;
      const { speedoMph } = req.params;
      const value = (newTireDiamIn / oldTireDiamIn) * speedoMph;
      res.json({
        actualSpeed: Math.round(value * 100) / 100,
        newTireDiamIn: parseFloat(newTireDiamIn),
        oldTireDiamIn: parseFloat(oldTireDiamIn),
        speedoMph: parseFloat(speedoMph)
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };
};
