const admin_user = require('../../model/adminModel/adminUser');
const admin_general_setting = require('../../model/adminModel/stateCities');
const admin_farmer_setting = require('../../model/adminModel/farmerKit');

exports.login = (data, callback) => {
    admin_user.find(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.changePassword = (data, callback) => {
    admin_user.saveUserAfterResetPass(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.getAdminList = (data, callback) => {
    admin_user.getAdminList(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.addState = (data, callback) => {
    admin_general_setting.addState(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.addCity = (data, callback) => {
    admin_general_setting.addCity(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })

}

exports.addFarmerKit = (data, image, callback) => {
    admin_farmer_setting.addFarmerKit(data, image, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}

exports.uploadKit = (data, callback) => {
    admin_farmer_setting.uploadKit(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}

exports.getProductList = (data, callback) => {
    admin_farmer_setting.getProductList(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}