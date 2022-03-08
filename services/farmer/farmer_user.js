const farmer = require('../../model/farmerModel/farmer');
const product = require('../../model/farmerModel/produce');

exports.register = (data, callback) => {
    farmer.save(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })

}
exports.login = (data, callback) => {
    farmer.find(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.changePassword = (data, callback) => {
    farmer.saveUserAfterResetPass(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.editProfile = (data, callback) => {
    farmer.saveEditedProfile(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}
exports.getFarmerList = (data, callback) => {
    farmer.getFarmerList(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}
exports.sellProduct = (data, callback) => {
    product.sellProduct(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}
exports.getProductList = (data, callback) => {
    product.getProductList(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}