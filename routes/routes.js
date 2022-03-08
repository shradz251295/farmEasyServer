const express = require('express');
const router = express.Router();
const farmer_controller = require('../controller/farmerController/farmer');
const admin_controller = require('../controller/adminController/adminController');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

/**
 * Farmer APIs
 */
router.post('/farmer/createAccount', farmer_controller.register);
router.post('/farmer/login', farmer_controller.login);
router.post('/farmer/editProfile', farmer_controller.editProfile);
router.post('/farmer/changePassword', farmer_controller.changePassword);
router.get('/farmer/getFarmerList', farmer_controller.getFarmerList);
router.post('/farmer/sellProduct', farmer_controller.sellProduct);


/**
 * Admin APIs
 */

router.post('/admin/login', admin_controller.login);
router.post('/admin/changePassword', admin_controller.changePassword);
router.get('/admin/getAdminList', admin_controller.getAdminList);
router.post('/admin/addState', admin_controller.addState);
router.post('/admin/addCity', admin_controller.addCity);
router.post('/admin/uploadKits', admin_controller.uploadKit);
router.post('/admin/addFarmerKit', upload.single('image'), admin_controller.addFarmerKit);
router.get('/farmer/getProductList', admin_controller.getProductList);

module.exports = router;