const express = require('express');
const router = express.Router();
const farmer_controller = require('../controller/farmerController/farmer');
const admin_controller = require('../controller/adminController/adminController');
const customer_controller = require('../controller/customerController/customer');

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
router.post('/farmer/sellProduct', upload.single('image'), farmer_controller.sellProduct);
router.get('/farmer/getProductList', farmer_controller.getProductList);
router.post('/farmer/deleteProduce', farmer_controller.deleteProduce);
router.get('/farmer/getFarmerKit', farmer_controller.getFarmerKitList);

/**
 * Customer APIs
 */
router.post('/customer/createAccount', customer_controller.register);
router.post('/customer/login', customer_controller.login);
router.post('/customer/editProfile', customer_controller.editProfile);
// router.post('/customer/changePassword', customer_controller.changePassword);
router.get('/customer/getProductList', customer_controller.getProductList);
router.get('/customer/getCustomerList', customer_controller.getCustomerList)

/**
 * Admin APIs
 */

router.post('/admin/login', admin_controller.login);
router.post('/admin/changePassword', admin_controller.changePassword);
router.get('/admin/getAdminList', admin_controller.getAdminList);
router.post('/admin/editProfile', admin_controller.editProfile);
router.post('/admin/addState', admin_controller.addState);
router.get('/admin/getState', admin_controller.getState);
router.post('/admin/deleteState', admin_controller.deleteState);
router.post('/admin/addCity', admin_controller.addCity);
router.get('/admin/getCity', admin_controller.getCity);
router.post('/admin/uploadKits', admin_controller.uploadKit);
router.post('/admin/addFarmerKit', upload.single('image'), admin_controller.addFarmerKit);
router.get('/admin/getProductList', admin_controller.getProductList);

module.exports = router;