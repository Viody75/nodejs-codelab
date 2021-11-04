const express = require('express');
var router = express.Router();

const authUser = require('../middlewares/auth_users');

var invApiController = require('../controllers/inv_api_controller');

router.get('/getinventories', invApiController.getInventories);

router.post('/addinventory', authUser, invApiController.addItemInv);

module.exports = router