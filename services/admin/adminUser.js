const admin_user = require('../../model/adminModel/adminUser');
const admin_general_setting = require('../../model/adminModel/stateCities')
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
    console.log("daaaa", data)
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