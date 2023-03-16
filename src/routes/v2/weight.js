const express = require('express');

const router = express.Router();
const ctr = require('../../controllers/v2/weight');

/**
 * @swagger
 *  tags:
 *    name: Weight
 */

/**
 * @openapi
 * /api/v2/weight/CaratToGram/{input}:
 *   get:
 *     tags: [Weight]
 *     parameters:
 *      - name: input
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/CaratToGram/:input', ctr.caratToGram);

module.exports = router;
