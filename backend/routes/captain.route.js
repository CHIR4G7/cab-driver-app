const express = require('express')
const router = express.Router();
const {body} = require('express-validator')

const { registerCaptain,loginCaptain,getCaptainProfile,logoutCaptain } = require('../controllers/captain.controller')
const {authCaptain} = require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email!"),
    body('firstname').isLength({min:3}).withMessage("First Name should be 3 or more characters long!"),
    body('lastname').isLength({min:3}).withMessage("Last Name should be 3 or more characters long!"),
    body('password').isLength({min:6}).withMessage("Password must be 6 characters long!"),
    body('vehicle.color').isLength({min:3}).withMessage("Color should be minimum 3 characters long!"),
    body('vehicle.plate').isLength({min:3}).withMessage("Plate Number should be minimum 3 characters long!"),
    body('vehicle.capacity').isLength({min:1}).withMessage("Minimum Capactiy is 1!"),
    body('vehicle.typeVehicle').isIn(['Car', 'Motorcycle', 'Auto']).withMessage("Invalid Vehicle Type!")
],registerCaptain)

router.post('/login',[
    body('email').isEmail().withMessage("Invalid Email!"),
    body('password').isLength({min:6}).withMessage("Password must be 6 characters long!")
],loginCaptain)

router.get('/getprofile',authCaptain,getCaptainProfile)

router.post('/logout',authCaptain,logoutCaptain)

module.exports = router