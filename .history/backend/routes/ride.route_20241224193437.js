const express = require('express')
const router = express.Router();
const {body} = require('express-validator');
const { authUser } = require('../middlewares/auth.middleware');
const { createRide,getFare } = require('../controllers/ride.controller');

router.post('/create',[
    body('pickup').isString(),
    body('destination').isString(),
    body('vehicleType').isIn(['car','auto','motorcycle'])
],authUser,createRide)

router.post('/getFares',[

],authUser,getFare)

router.post('/getRideInfo',authUser,)
module.exports = router