const mongoose = require('mongoose'); //ODM(object document Mapper) framework for MongoDB

var AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        // unique: true
    },
    state: {
        type: String,
        required: true
    },
    statedescription: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    citydescription: {
        type: String,
        // required: true
    },
    status: {
        type: String,
        required: true
    }
})

var admin = mongoose.model('adminStateCityData', AdminSchema);

function admin_model() {

}

admin_model.prototype.addState = (data, callback) => {
    const admin_data = new admin(data);
    admin_data.save((err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}

admin_model.prototype.addCity = (data, callback) => {
    const admin_data = new admin(data);
    admin_data.save((err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }

    })
}

admin_model.prototype.getState = (data, callback) => {
    admin.find({}, (err, result) => {
        if (err) {
            callback(err)
        } else {
            return callback(null, result)
        }
    })
}


admin_model.prototype.getCity = (data, callback) => {
    console.log(data)
    admin.find({}, (err, result) => {
        if (err) {
            callback(err)
        } else {
            return callback(null, result)
        }
    })
}

admin_model.prototype.deleteState = (data, callback) => {
    const id = data;
    console.log(data)
    admin.deleteOne({ _id: id._id }, (err, result) => {
        if (err) {
            callback(err)
        } else {
            const obj = {
                status: 200,
                msg: "Record is deleted successfully"
            }
            return callback(null, obj)
        }
    })
}


module.exports = new admin_model;