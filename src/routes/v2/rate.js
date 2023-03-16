const express = require('express');

const router = express.Router();
const ctr = require('../../controllers/v2/rate');

/**
 * @swagger
 *  tags:
 *    name: Rate
 */

/**
 * @openapi
 * /api/v2/rate/fuelCostForRuntime/{numberHoursToRun}/{fuelPricePerUnit}/{burnRateUPH}:

 */
router.get('/fuelCostForRuntime/:numberHoursToRun/:fuelPricePerUnit/:burnRateUPH', ctr.fuelCostForRuntime);

/**
 * @openapi

 */
router.get('/fuelTankRuntime/:burnRateUPH/:fuelTankCapacity', ctr.fuelTankRuntime);

module.exports = router;
