const express = require('express')
const router = express.Router();
const {body} = require('express-validator')

const {registerUser,loginUser,getUserProfile,logoutUser} = require('../controllers/user.contollers')
const {authUser} = require('../middlewares/auth.middleware')


router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email!"),
    body('firstname').isLength({min:3}).withMessage("First Name should be 3 or more characters long!"),
    body('lastname').isLength({min:3}).withMessage("Last Name should be 3 or more characters long!"),
    body('password').isLength({min:6}).withMessage("Password must be 6 characters long!")
],registerUser)

router.post('/login',[
    body('email').isEmail().withMessage("Invalid Email!"),
    body('password').isLength({min:6}).withMessage("Password must be 6 characters long!")
],loginUser)

router.get('/getuserprofile',authUser,getUserProfile)

router.post('/logout',authUser,logoutUser)

module.exports = router