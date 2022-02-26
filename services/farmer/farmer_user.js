const farmer = require('../../model/farmerModel/farmer');

exports.register = (data, callback) => {
    console.log(data);
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

exports.getFarmerList = (data, callback) => {
    farmer.getFarmerList(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}