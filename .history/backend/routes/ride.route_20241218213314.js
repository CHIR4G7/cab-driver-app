const express = require('express')
const router = express.Router();
const {body} = require('express-validator');
const { authUser } = require('../middlewares/auth.middleware');

router.post('/create',[
    body('userid').isString().isLength({max:24,min:24}).withMessage("Invalid User ID!"),
    body('pickup').isString(),
    body('destination').isString()
],authUser)

module.exports = router