const mongoose = require("mongoose"); //ODM(object document Mapper) framework for MongoDB
var CustomerSchema = new mongoose.Schema({
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

var customer = mongoose.model("customerData", CustomerSchema);

function customer_model() {}

customer_model.prototype.save = (data, callback) => {
    customer.findOne({ emailId: data.emailId }, (err, result) => {
        if (err) {
            callback(err);
        } else {
            if (result !== null) callback("Username already registered");
            else {
                const customer_data = new customer(data);
                customer_data.save((err, result) => {
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

customer_model.prototype.find = (data, callback) => {
    customer.findOne({ emailId: data.username }, (err, result) => {
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

customer_model.prototype.saveEditedProfile = (data, callback) => {
    customer.findOneAndUpdate({ emailId: data.emailId }, {
            $set: {
                name: data.name,
                emailId: data.emailId,
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
                customer.findOne({ username: data.username }, (err, result) => {
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

customer_model.prototype.saveUserAfterResetPass = (data, callback) => {
    customer.findOneAndUpdate({ username: data.username }, { $set: { password: data.password } },
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

customer_model.prototype.getCustomerList = (data, callback) => {
    customer.find({}, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};

customer_model.prototype.findOne = (data, callback) => {
    customer.findOne({ username: data.username }, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};
// customer_model.prototype.find = (data, callback) => {
//    customer.findOne({ "username": data.username }, (err, result) => {
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

module.exports = new customer_model();