const express = require('express');

const router = express.Router();
const ctr = require('../../controllers/v2/length');

/**
 * @swagger
 *  tags:
 *    name: Length
 */

/**
 * @openapi
 * /api/v2/length/millimeterToInch/{input}:
 *   get:
 *     tags: [Length]
 *     parameters:
 *      - name: input
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/millimeterToInch/:input', ctr.millimeterToInch);

module.exports = router;
