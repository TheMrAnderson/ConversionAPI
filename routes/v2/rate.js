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
 *   get:
 *     description: Calculate fuel cost for the desired runtime
 *     tags: [Rate]
 *     parameters:
 *      - name: numberHoursToRun
 *        in: path
 *        required: true
 *        type: number
 *        description: Number of hours desired to run
 *      - name: fuelPricePerUnit
 *        in: path
 *        required: true
 *        type: number
 *        description: Price of fuel per unit whether gallon or liter, but the unit used here
 *          is the same unit used in the burnRateUPH
 *      - name: burnRateUPH
 *        in: path
 *        required: true
 *        type: number
 *        description: Fuel burn rate in your preferred units per hour (gallons, liters, etc.)\
 *          as long as the units matches the fuelPricePerUnit
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/fuelCostForRuntime/:numberHoursToRun/:fuelPricePerUnit/:burnRateUPH', ctr.fuelCostForRuntime);

/**
 * @openapi
 * /api/v2/rate/fuelTankRuntime/{burnRateUPH}/{fuelTankCapacity}:
 *   get:
 *     description: Calculate runtime for the fuel tank
 *     tags: [Rate]
 *     parameters:
 *      - name: burnRateUPH
 *        in: path
 *        required: true
 *        type: number
 *        description: Fuel burn rate in your preferred units per hour (gallons, liters, etc.)\
 *          as long as the units matches the fuelTankCapacity
 *      - name: fuelTankCapacity
 *        in: path
 *        required: true
 *        type: number
 *        description: Fuel tank capacity in a unit matching the burnRateUPH
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/fuelTankRuntime/:burnRateUPH/:fuelTankCapacity', ctr.fuelTankRuntime);

module.exports = router;
