const express = require('express');

const router = express.Router();
const ctr = require('../../controllers/v2/capacity');

/**
 * @swagger
 *  tags:
 *    name: Capacity
 */

/**
 * @openapi
 * /api/v2/capacity/bushelToInch3/{input}:
 *   get:
 *     tags: [Capacity]
 *     parameters:
 *      - name: input
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/bushelToInch3/:input', ctr.bushelToInch3);

module.exports = router;
