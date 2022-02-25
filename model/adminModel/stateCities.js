const mongoose = require('mongoose'); //ODM(object document Mapper) framework for MongoDB

var AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

var admin = mongoose.model('adminStateCityData', AdminSchema);

function admin_model() {

}

admin_model.prototype.addState = (data, callback) => {
    console.log(data)
    admin.findOne({ "username": data.username }, (err, result) => {
        //     console.log(result)
        //     if (err) {
        //         callback(err);
        //     } else {
        //         if (result !== null)
        //             callback('State already added');
        //         else {
        const admin_data = new admin(data);
        admin_data.save((err, result) => {
            if (err) {
                callback(err);
            } else {
                return callback(null, result);
            }

            // })
            //         }
            //     }

        })
    })
}

admin_model.prototype.addCity = (data, callback) => {
    admin.findOne({ "username": data.username, "state": data.state, "city": data.city }, (err, result) => {
        if (err) {
            callback(err);
        } else {
            if (result !== null)
                callback('City already added');
            else {
                const admin_data = new admin(data);
                admin_data.save((err, result) => {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(null, result);
                    }

                })
            }
        }

    })
}

module.exports = new admin_model;