const express = require('express');

const router = express.Router();
const ctr = require('../../controllers/v2/torque');

/**
 * @swagger
 *  tags:
 *    name: Torque
 */

/**
 * @openapi
 * /api/v2/torque/GramCentimeterToDyneCentimeter/{input}:
 *   get:
 *     tags: [Torque]
 *     parameters:
 *      - name: input
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/GramCentimeterToDyneCentimeter/:input', ctr.gramCentimeterToDyneCentimeter);

module.exports = router;
