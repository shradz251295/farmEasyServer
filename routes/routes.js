const express = require('express');
const router = express.Router();
const farmer_controller = require('../controller/farmerController/farmer');
const admin_controller = require('../controller/adminController/adminController');

/**
 * Farmer APIs
 */
router.post('/farmer/createAccount', farmer_controller.register);
router.post('/farmer/login', farmer_controller.login);
router.post('/farmer/changePassword', farmer_controller.changePassword);
router.get('/farmer/getFarmerList', farmer_controller.getFarmerList)


/**
 * Admin APIs
 */

router.post('/admin/login', admin_controller.login);
router.post('/admin/changePassword', admin_controller.changePassword);
router.get('/admin/getAdminList', admin_controller.getAdminList);
router.post('/admin/addState', admin_controller.addState);
router.post('/admin/addCity', admin_controller.addCity);

module.exports = router;