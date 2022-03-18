const farmer = require('../../model/farmerModel/farmer');
const product = require('../../model/farmerModel/produce');
const transaction = require('../../model/farmerModel/transaction');

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
exports.sellProduct = (data, image, callback) => {
    product.sellProduct(data, image, (err, result) => {
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

exports.getProductList = (data, callback) => {
    product.getProductList(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.deleteProduce = (data, callback) => {
    product.deleteProduce(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.getFarmerKitList = (data, callback) => {
    transaction.getFarmerKitList(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

exports.addFarmerKitList = (data, callback) => {
    transaction.save(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}