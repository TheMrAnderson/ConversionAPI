const express = require('express');

const router = express.Router();
const ctr = require('../../controllers/v2/electricity');

/**
 * @swagger
 *  tags:
 *    name: Electricity
 */

/**
 * @openapi
 * /api/v2/electricity/batteryRuntimeHours/{loadWattage}/{batteryAh}:
 *   get:
 *     tags: [Electricity]
 *     parameters:
 *      - name: loadWattage
 *        in: path
 *        required: true
 *        type: number
 *      - name: batteryAh
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/batteryRuntimeHours/:loadWattage/:batteryAh', ctr.getBatteryRuntimeHours);

/**
 * @openapi
 * /api/v2/electricity/batteryRuntimeMinutes/{loadWattage}/{batteryAh}:
 *   get:
 *     tags: [Electricity]
 *     parameters:
 *      - name: loadWattage
 *        in: path
 *        required: true
 *        type: number
 *      - name: batteryAh
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/batteryRuntimeMinutes/:loadWattage/:batteryAh', ctr.getBatteryRuntimeMinutes);

/**
 * @openapi
 * /api/v2/electricity/ohms:
 *   get:
 *     description: Get ohms by supplying any 2 of the parameters
 *     tags: [Electricity]
 *     parameters:
 *      - name: volts
 *        in: query
 *        required: false
 *        type: number
 *      - name: watts
 *        in: query
 *        required: false
 *        type: number
 *      - name: amps
 *        in: query
 *        required: false
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 *       400:
 *         description: Returns when 2 parameters aren't sent
 */
router.get('/ohms', ctr.getOhms);

/**
 * @openapi
 * /api/v2/electricity/amps:
 *   get:
 *     description: Get amps by supplying any 2 of the parameters
 *     tags: [Electricity]
 *     parameters:
 *      - name: volts
 *        in: query
 *        required: false
 *        type: number
 *      - name: watts
 *        in: query
 *        required: false
 *        type: number
 *      - name: ohms
 *        in: query
 *        required: false
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 *       400:
 *         description: Returns when 2 parameters aren't sent
 */
router.get('/amps', ctr.getAmps);

/**
 * @openapi
 * /api/v2/electricity/watts:
 *   get:
 *     description: Get watts by supplying any 2 of the parameters
 *     tags: [Electricity]
 *     parameters:
 *      - name: volts
 *        in: query
 *        required: false
 *        type: number
 *      - name: amps
 *        in: query
 *        required: false
 *        type: number
 *      - name: ohms
 *        in: query
 *        required: false
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 *       400:
 *         description: Returns when 2 parameters aren't sent
 */
router.get('/watts', ctr.getWatts);

/**
 * @openapi
 * /api/v2/electricity/volts:
 *   get:
 *     description: Get volts by supplying any 2 of the parameters
 *     tags: [Electricity]
 *     parameters:
 *      - name: amps
 *        in: query
 *        required: false
 *        type: number
 *      - name: watts
 *        in: query
 *        required: false
 *        type: number
 *      - name: ohms
 *        in: query
 *        required: false
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 *       400:
 *         description: Returns when 2 parameters aren't sent
 */
router.get('/volts', ctr.getVolts);

module.exports = router;
