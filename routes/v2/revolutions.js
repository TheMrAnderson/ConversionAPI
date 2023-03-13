const express = require('express');

const router = express.Router();
const ctr = require('../../controllers/v2/revolutions');

/**
 * @swagger
 *  tags:
 *    name: Revolutions
 */

/**
 * @openapi
 * /api/v2/revolutions/revsPerMilePerMillimeter/{circumference}:
 *   get:
 *     tags: [Revolutions]
 *     parameters:
 *      - name: circumference
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/revsPerMilePerMillimeter/:circumference', ctr.revsPerMilePerMillimeter);

/**
 * @openapi
 * /api/v2/revolutions/revsPerMilePerInch/{circumference}:
 *   get:
 *     tags: [Revolutions]
 *     parameters:
 *      - name: circumference
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/revsPerMilePerInch/:circumference', ctr.revsPerMilePerInch);

/**
 * @openapi
 * /api/v2/revolutions/revsPerKilometerPerMillimeter/{circumference}:
 *   get:
 *     tags: [Revolutions]
 *     parameters:
 *      - name: circumference
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/revsPerKilometerPerMillimeter/:circumference', ctr.revsPerKilometerPerMillimeter);

/**
 * @openapi
 * /api/v2/revolutions/revsPerKilometerPerInch/{circumference}:
 *   get:
 *     tags: [Revolutions]
 *     parameters:
 *      - name: circumference
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Returns an object with results
 */
router.get('/revsPerKilometerPerInch/:circumference', ctr.revsPerKilometerPerInch);

module.exports = router;
