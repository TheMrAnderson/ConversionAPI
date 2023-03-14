const express = require('express');

const router = express.Router();
const ctr = require('../../controllers/v2/area');

/**
 * @swagger
 *  tags:
 *    name: Area
 */

/**
 * @openapi
 * /api/v2/area/acreToFoot2/{input}:
 *   get:
 *     tags: [Area]
 *     parameters:
 *      - name: input
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/acreToFoot2/:input', ctr.acreToFoot2);

module.exports = router;
