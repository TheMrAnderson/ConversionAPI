const express = require('express');

const router = express.Router();
const ctr = require('../../controllers/v2/gearing');

/**
 * @swagger
 *  tags:
 *    name: Gearing
 */

/**
 * @openapi
 * /api/v2/gearing/newGearRatioNeeded/{newTireDiamIn}/{oldTireDiamIn}/{axleRatio}:
 *   get:
 *     description: Determine the new gear ratio needed when moving to a different
 *      tire size to keep the overall ratio the same. Also provides the effective gear
 *      ratio with the current gearing and new tire size
 *     tags: [Gearing]
 *     parameters:
 *      - name: newTireDiamIn
 *        in: path
 *        required: true
 *        type: number
 *        description: Diameter in inches of new tire
 *      - name: oldTireDiamIn
 *        in: path
 *        required: true
 *        type: number
 *        description: Diameter in inches of old tire
 *      - name: axleRatio
 *        in: path
 *        required: true
 *        type: number
 *        description: Ring & pinion ratio before the colon, ex. 3.73
 *     responses:
 *       200:
 *         description: Returns an object with new and effective gear ratios
 */
router.get('/newGearRatioNeeded/:newTireDiamIn/:oldTireDiamIn/:axleRatio', ctr.newGearRatioNeeded);

/**
 * @openapi
 * /api/v2/gearing/engineRpmAtSpeed/{axleRatio}/{vehicleSpeedMph}/{transRatio}/{tireDiamIn}:
 *   get:
 *     description: Determine the engine RPM at a given speed for the combination of the
 *      axle ratio, transmission gear and tire diameter
 *     tags: [Gearing]
 *     parameters:
 *      - name: axleRatio
 *        in: path
 *        required: true
 *        type: number
 *        description: Ring & pinion ratio before the colon, ex. 3.73
 *      - name: vehicleSpeedMph
 *        in: path
 *        required: true
 *        type: number
 *        description: Vehicle speed in MPH
 *      - name: transRatio
 *        in: path
 *        required: true
 *        type: number
 *        description: Transmission ratio before the colon, ex. 2.54
 *      - name: tireDiamIn
 *        in: path
 *        required: true
 *        type: number
 *        description: Diameter in inches of tire
 *     responses:
 *       200:
 *         description: Returns an object with engine RPM at vehicle speed
 */
router.get('/engineRpmAtSpeed/:axleRatio/:vehicleSpeedMph/:transRatio/:tireDiamIn', ctr.engineRpmAtSpeed);

/**
 * @openapi
 * /api/v2/gearing/vehicleSpeedAtEngineRpm/{engineRpm}/{tireDiamIn}/{transRatio}/{auxRatio}/{tCaseRatio}/{axleRatio}:
 *   get:
 *     description: Determine the vehicle speed at a given engine RPM for the
 *      combination of the tire diameter, transmission gear,
 *      overdrive (if equipped, else 1, can also be used to figure a second transfer case),
 *      transfer case (high or low gear as needed), and axle ratio
 *     tags: [Gearing]
 *     parameters:
 *      - name: engineRpm
 *        in: path
 *        required: true
 *        type: number
 *        description: RPM of the engine
 *      - name: tireDiamIn
 *        in: path
 *        required: true
 *        type: number
 *        description: Diameter in inches of tire
 *      - name: transRatio
 *        in: path
 *        required: true
 *        type: number
 *        description: Transmission ratio before the colon, ex. 2.54
 *      - name: auxRatio
 *        in: path
 *        required: true
 *        type: number
 *        description: auxRatio Overdrive or second transfer case ratio before the colon,
 *          ex. 4.0. or 1 if not equipped
 *      - name: tCaseRatio
 *        in: path
 *        required: true
 *        type: number
 *        description: Transfer case ratio before the colon, ex. 2.72
 *      - name: axleRatio
 *        in: path
 *        required: true
 *        type: number
 *        description: Ring & pinion ratio before the colon, ex. 3.73
 *     responses:
 *       200:
 *         description: Returns an object with vehicle speed at the provided engine RPM
 */
router.get(
  '/vehicleSpeedAtEngineRpm/:engineRpm/:tireDiamIn/:transRatio/:auxRatio/:tCaseRatio/:axleRatio',
  ctr.vehicleSpeedAtEngineRpm
);

/**
 * @openapi
 * /api/v2/gearing/crawlRatio/{axleRatio}/{lowTCaseRatio}/{transLowGearRatio}/{auxRatio}:
 *   get:
 *     description: Determine the crawl ratio for the provided parameters
 *     tags: [Gearing]
 *     parameters:
 *      - name: axleRatio
 *        in: path
 *        required: true
 *        type: number
 *        description: Ring & pinion ratio before the colon, ex. 3.73
 *      - name: lowTCaseRatio
 *        in: path
 *        required: true
 *        type: number
 *        description: Transfer case ratio before the colon, ex. 2.72
 *      - name: transLowGearRatio
 *        in: path
 *        required: true
 *        type: number
 *        description: Transmission ratio before the colon, ex. 2.54
 *      - name: auxRatio
 *        in: path
 *        required: true
 *        type: number
 *        description: auxRatio Overdrive or second transfer case ratio before the colon,
 *          ex. 4.0. or 1 if not equipped
 *     responses:
 *       200:
 *         description: Returns an object with crawl ratio
 */
router.get('/crawlRatio/:axleRatio/:lowTCaseRatio/:transLowGearRatio/:auxRatio', ctr.crawlRatio);

/**
 * @openapi
 * /api/v2/gearing/rotationVelocity/{axleRatio}/{speedMph}/{tireDiamIn}:
 *   get:
 *     description: Determine the rotation velocity which is how fast
 *          an object rotates or revolves relative to another point
 *     tags: [Gearing]
 *     parameters:
 *      - name: axleRatio
 *        in: path
 *        required: true
 *        type: number
 *        description: Ring & pinion ratio before the colon, ex. 3.73
 *      - name: speedMph
 *        in: path
 *        required: true
 *        type: number
 *        description: Vehicle speed in MPH
 *      - name: tireDiamIn
 *        in: path
 *        required: true
 *        type: number
 *        description: Diameter in inches of tire
 *     responses:
 *       200:
 *         description: Returns an object with rotation velocity
 */
router.get('/rotationVelocity/:axleRatio/:speedMph/:tireDiamIn', ctr.rotationVelocity);

/**
 * @openapi
 * /api/v2/gearing/calculateGearRatio/{ringGearTeeth}/{pinionGearTeeth}:
 *   get:
 *     description: Determine the gear ratio by counting teeth on the ring and pinion
 *     tags: [Gearing]
 *     parameters:
 *      - name: ringGearTeeth
 *        in: path
 *        required: true
 *        type: number
 *        description: Number of teeth on the ring gear
 *      - name: pinionGearTeeth
 *        in: path
 *        required: true
 *        type: number
 *        description: Number of teeth on the pinion gear
 *     responses:
 *       200:
 *         description: Returns an object with the gear ratio
 */
router.get('/calculateGearRatio/:ringGearTeeth/:pinionGearTeeth', ctr.calculateGearRatio);

/**
 * @openapi
 * /api/v2/gearing/actualSpeed/{newTireDiamIn}/{oldTireDiamIn}/{speedoMph}:
 *   get:
 *     description: Determine actual speed when changing tire sizes and not regearing.
 *      The speedometer is still calibrated at factory specs and this will show what
 *      speed you are actually running
 *     tags: [Gearing]
 *     parameters:
 *      - name: newTireDiamIn
 *        in: path
 *        required: true
 *        type: number
 *        description: Diameter in inches of new tire
 *      - name: oldTireDiamIn
 *        in: path
 *        required: true
 *        type: number
 *        description: Diameter in inches of old tire
 *      - name: speedoMph
 *        in: path
 *        required: true
 *        type: number
 *        description: Vehicle speed in MPH as read on the speedometer
 *     responses:
 *       200:
 *         description: Returns an object with vehicle speed
 */
router.get('/actualSpeed/:newTireDiamIn/:oldTireDiamIn/:speedoMph', ctr.actualSpeed);

module.exports = router;
