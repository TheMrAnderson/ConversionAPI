const express = require('express');

const router = express.Router();
const ctr = require('../../controllers/v2/speed');

/**
 * @swagger
 *  tags:
 *    name: Speed
 */

/**
 * @openapi
 * /api/v2/speed/mphToKnots/{input}:
 *   get:
 *     tags: [Speed]
 *     parameters:
 *      - name: input
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/mphToKnots/:input', ctr.mphToKnots);

/**
 * @openapi
 * /api/v2/speed/knotsToMph/{input}:
 *   get:
 *     tags: [Speed]
 *     parameters:
 *      - name: input
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/knotsToMph/:input', ctr.knotsToMph);

/**
 * @openapi
 * /api/v2/speed/knotsToMach/{input}:
 *   get:
 *     tags: [Speed]
 *     parameters:
 *      - name: input
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/knotsToMach/:input', ctr.knotsToMach);

/**
 * @openapi
 * /api/v2/speed/mphToMach/{input}:
 *   get:
 *     tags: [Speed]
 *     parameters:
 *      - name: input
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/mphToMach/:input', ctr.mphToMach);

module.exports = router;
