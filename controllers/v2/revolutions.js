const revsPerMilePerMillimeter = (req, res) => {
  try {
    // Convert a mile to mm, then gets revs per mile
    // Mile = 1609344 mm
    const { circumference } = req.params;
    res.json({
      result: 1609344 / circumference
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const revsPerMilePerInch = (req, res) => {
  try {
    // Convert a mile to inches, then gets revs per mile
    // Mile = 63360 in
    const { circumference } = req.params;
    res.json({
      result: 63360 / circumference
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const revsPerKilometerPerMillimeter = (req, res) => {
  try {
    // Convert a KM to MM, then get revs per KM
    // KM = 1, 000, 000 MM
    const { circumference } = req.params;
    res.json({
      result: 1000000 / circumference
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const revsPerKilometerPerInch = (req, res) => {
  try {
    // Convert a KM to inches, then get revs per KM
    // KM = 39370.0787 Inches
    const { circumference } = req.params;
    res.json({
      result: 39370.0787 / circumference
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

// export controller functions
module.exports = {
  revsPerMilePerMillimeter,
  revsPerMilePerInch,
  revsPerKilometerPerMillimeter,
  revsPerKilometerPerInch
};
