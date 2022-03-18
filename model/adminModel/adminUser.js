const mongoose = require('mongoose'); //ODM(object document Mapper) framework for MongoDB

var AdminSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile_no: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

var user = mongoose.model('adminData', AdminSchema);

function user_model() {

}


user_model.prototype.find = (data, callback) => {

    user.findOne({ "username": data.username }, (err, result) => {
        if (err) {
            callback(err);
        } else {
            if (result !== null && (result.password == data.password)) {
                return callback(null, result);
            } else {
                callback("password does not match")
            }
        }
    })
}

user_model.prototype.saveUserAfterResetPass = (data, callback) => {
    user.findOneAndUpdate({ username: data.username }, { $set: { password: data.password } }, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

user_model.prototype.editedProfile = (data, callback) => {
    // console.log(data)
    user.findOneAndUpdate({ username: data.username }, {
            $set: {
                firstname: data.firstname,
                lastname: data.lastname,
                username: data.username,
                mobile_no: data.mobile_no,
            },
        },
        (err, result) => {
            if (err) {
                callback(err);
            } else {
                user.findOne({ username: data.username }, (err, result) => {
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
user_model.prototype.getAdminList = (data, callback) => {
    user.find({}, (err, result) => {
        if (err) {
            callback(err)
        } else {
            return callback(null, result)
        }
    })
}

module.exports = new user_model;