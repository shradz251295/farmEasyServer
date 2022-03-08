const mongoose = require("mongoose"); //ODM(object document Mapper) framework for MongoDB
var FarmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    pincode: {
        type: String,
    },
    mobile_number: {
        type: String,
    },
    alternative_mobile_number: {
        type: String,
    },
});

var farmer = mongoose.model("farmerData", FarmerSchema);

function farmer_model() {}

farmer_model.prototype.save = (data, callback) => {
    farmer.findOne({ emailId: data.username }, (err, result) => {
        if (err) {
            callback(err);
        } else {
            if (result !== null) callback("Username already registered");
            else {
                const farmer_data = new farmer(data);
                farmer_data.save((err, result) => {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(null, result);
                    }
                });
            }
        }
    });
};

farmer_model.prototype.find = (data, callback) => {
    farmer.findOne({ username: data.username }, (err, result) => {
        if (err) {
            callback(err);
        } else {
            if (result !== null && result.password == data.password) {
                return callback(null, result);
            } else {
                callback("password does not match");
            }
        }
    });
};

farmer_model.prototype.saveEditedProfile = (data, callback) => {
    farmer.findOneAndUpdate({ username: data.username }, {
            $set: {
                name: data.name,
                username: data.emailId,
                address: data.address,
                country: data.country,
                state: data.state,
                city: data.city,
                pincode: data.pincode,
                mobile_number: data.mobile_number,
                alternative_mobile_number: data.alternative_mobile_number,
            },
        },
        (err, result) => {
            if (err) {
                callback(err);
            } else {
                farmer.findOne({ username: data.username }, (err, result) => {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(null, result);
                    }
                });
            }
        }
    );
};

farmer_model.prototype.saveUserAfterResetPass = (data, callback) => {
    farmer.findOneAndUpdate({ username: data.username }, { $set: { password: data.password } },
        (err, result) => {
            if (err) {
                callback(err);
            } else {
                // console.log("--------------------------", result)
                return callback(null, result);
            }
        }
    );
};

farmer_model.prototype.getFarmerList = (data, callback) => {
    farmer.find({}, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};

farmer_model.prototype.findOne = (data, callback) => {
    farmer.findOne({ username: data.username }, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};
// farmer_model.prototype.find = (data, callback) => {
//     farmer.findOne({ "username": data.username }, (err, result) => {
//         if (err) {
//             callback(err);
//         } else {
//             if (result.password == data.password)
//                 return callback(null, result);

//             else {
//                 callback("password does not match")
//             }
//         }
//     })
// }

module.exports = new farmer_model();