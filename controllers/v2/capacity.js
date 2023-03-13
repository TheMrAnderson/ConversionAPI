const bushelToInch3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 2150.42
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const bushelToLiter = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 35.239
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const bushelToPeck = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 4
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const centimeter3ToInch3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 0.061
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const decimeter3ToInch3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 61.023
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const foot3ToMeter3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 0.028
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const inch3ToMeter3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 16.387
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const inch3ToDecimeter3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 0.0164
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const inch3ToUsGallon = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 0.004329
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const meter3ToYard3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 1.307
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const yard3ToMeter3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 0.765
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const cupToOunce = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 8
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const usGallonToInch3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 231
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const usGallonToLiter = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 3.785411784
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const usGallonToOunce = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 128
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const literToInch3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 61.02
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const literToUsGallon = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 0.264172052
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const literToUsQuartDry = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 0.908
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const literToUsQuartLiquid = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 1.05668821
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const millileterToOunce = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 0.033814022
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const ounceToCentimeter3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 29.57353
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const ounceToInch3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 1.8047
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const ounceToCup = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input / 8
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const ounceToMillileter = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: ounceToCentimeter3(input)
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const ounceToUsGallon = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input / 128
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const ounceToPint = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input / 16
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const ounceToQuart = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input / 32
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const ounceToTablespoon = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 2
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const ounceToTeaspoon = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 6
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const teaspoonToTablespoon = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input / 3
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const tablespoonToTeaspoon = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 3
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const tablespoonToOunce = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 2
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const teaspoonToOunce = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input / 6
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const peckToLiter = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 8.81
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const peckToUsQuartDry = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 8
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const pintToCentimeter3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 473.18
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const pintToFoot3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 0.01671
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const pintToInch3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 28.875
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const pintToOunce = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 16
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const usQuartToInch3 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 57.75
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const usQuartToLiter = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 0.94635246
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const usQuartToOunce = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 32
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

// export controller functions
module.exports = {
  bushelToInch3,
  bushelToLiter,
  bushelToPeck,
  centimeter3ToInch3,
  decimeter3ToInch3,
  foot3ToMeter3,
  inch3ToMeter3,
  inch3ToDecimeter3,
  inch3ToUsGallon,
  meter3ToYard3,
  yard3ToMeter3,
  cupToOunce,
  usGallonToInch3,
  usGallonToLiter,
  usGallonToOunce,
  literToInch3,
  literToUsGallon,
  literToUsQuartDry,
  literToUsQuartLiquid,
  millileterToOunce,
  ounceToInch3,
  ounceToCup,
  ounceToMillileter,
  ounceToUsGallon,
  ounceToPint,
  ounceToQuart,
  ounceToTablespoon,
  ounceToTeaspoon,
  teaspoonToTablespoon,
  tablespoonToTeaspoon,
  tablespoonToOunce,
  teaspoonToOunce,
  peckToLiter,
  peckToUsQuartDry,
  pintToCentimeter3,
  pintToFoot3,
  pintToInch3,
  pintToOunce,
  usQuartToInch3,
  usQuartToLiter,
  usQuartToOunce
};
