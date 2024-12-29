const express = require('express')
const router = express.Router();
const {body} = require('express-validator');
const { authUser } = require('../middlewares/auth.middleware');
const { getAdressCoordinate, getDirectionTime, getAutoCompleteResults } = require('../controllers/maps.controllers');

router.get('/getAddressCorrdinate',authUser,getAdressCoordinate)
router.post('/getDirectionTime',authUser,getDirectionTime)
router.get('/autocomplete',authUser,getAutoCompleteResults)

module.exports = router