const customer = require('../../model/customerModel/customer');
const transaction = require('../../model/customerModel/transaction');

exports.register = (data, callback) => {
    customer.save(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.login = (data, callback) => {
    customer.find(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.changePassword = (data, callback) => {
    customer.saveUserAfterResetPass(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.editProfile = (data, callback) => {
    customer.saveEditedProfile(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.getCustomerList = (data, callback) => {
    customer.getCustomerList(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}


exports.getProductList = (data, callback) => {
    transaction.getOrderList(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.addProduct = (data, callback) => {
    transaction.save(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}