const express = require('express')
const router = express.Router();
const {body} = require('express-validator');
const { authUser, authCaptain } = require('../middlewares/auth.middleware');
const { createRide,getFare, getRideInfo } = require('../controllers/ride.controller');

router.post('/create',[
    body('pickup').isString(),
    body('destination').isString(),
    body('vehicleType').isIn(['car','auto','motorcycle'])
],authUser,createRide)

router.post('/getFares',[

],authUser,getFare)

router.post('/getRideInfo',authUser,getRideInfo)

router.post('/confirm',authCaptain)

module.exports = router