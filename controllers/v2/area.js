const acreToFoot2 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 43560
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const acreToMile2 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 0.0015625
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const acreToYard2 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 4840
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const foot2ToAcre = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input / 43560
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const foot2ToInch2 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 144
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const inch2ToFoot2 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input / 144
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const inch2ToYard2 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input / 1296
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const mile2ToAcre = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 640
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const rod2ToYard2 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 30.25
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const yard2ToAcre = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input / 4840
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const yard2ToInch2 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 1296
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const yard2ToRod2 = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 0.0330578512396694
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const circumference = (req, res) => {
  try {
    const { input } = req.params;
    res.json({
      result: input * 3.14159265359
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

// export controller functions
module.exports = {
  acreToFoot2,
  acreToMile2,
  acreToYard2,
  foot2ToAcre,
  foot2ToInch2,
  inch2ToFoot2,
  inch2ToYard2,
  mile2ToAcre,
  rod2ToYard2,
  yard2ToAcre,
  yard2ToInch2,
  yard2ToRod2,
  circumference
};
