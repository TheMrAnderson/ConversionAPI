const celciusToFehrenheit = (req, res) => {
  try {
    const obj = (req.params.input * 1.8) + 32;
    res.json({
      result: obj
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const fehrenheitToCelcius = (req, res) => {
  try {
    const obj = (req.params.input - 32) * 0.555555555556;
    res.json({
      result: obj
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

// export controller functions
module.exports = {
  celciusToFehrenheit,
  fehrenheitToCelcius
};
