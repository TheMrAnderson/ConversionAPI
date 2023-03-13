const express = require('express');

const router = express.Router();
const ctr = require('../../controllers/v2/temperature');

/**
 * @swagger
 *  tags:
 *    name: Temperature
 */

/**
 * @openapi
 * /api/v2/temperature/fehrenheitToCelcius/{input}:
 *   get:
 *     description: Convert Ferenheit to Celcius
 *     tags: [Temperature]
 *     parameters:
 *      - name: input
 *        in: path
 *        required: true
 *        type: number
 *        description: Original value to convert
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/fehrenheitToCelcius/:input', ctr.fehrenheitToCelcius);

/**
 * @openapi
 * /api/v2/temperature/celciusToFehrenheit/{input}:
 *   get:
 *     description: Convert Celcius to Ferenheit
 *     tags: [Temperature]
 *     parameters:
 *      - name: input
 *        in: path
 *        required: true
 *        type: number
 *        description: Original value to convert
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/celciusToFehrenheit/:input', ctr.celciusToFehrenheit);

module.exports = router;
