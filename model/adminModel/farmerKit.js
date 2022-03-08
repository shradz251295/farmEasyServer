const mongoose = require('mongoose'); //ODM(object document Mapper) framework for MongoDB

var AdminSchema = new mongoose.Schema({
    // username: {
    //     type: String,
    //     required: true,
    //     lowercase: true,
    //     // unique: true
    // },
    produceCategory: {
        type: String,
        required: true
    },
    produceName: {
        type: String,
        // required: true
    },
    image: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

var admin = mongoose.model('adminFarmerKitData', AdminSchema);

function admin_model() {

}
admin_model.prototype.addFarmerKit = (data, image, callback) => {
    data["image"] = 'data:image/jpg;base64, ' + image
    const farmer_data = new admin(data);

    farmer_data.save((err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};

admin_model.prototype.getProductList = (data, callback) => {
    admin.find({}, (err, result) => {
        if (err) {
            callback(err)
        } else {
            return callback(null, result)
        }
    })
}


// admin_model.prototype.uploadkit = (image, callback) => {
//     var updateUser = null
//     if (image != null) {
//         updateUser = 'data:image/jpg;base64, ' + image;
//     } else {
//         callback("image not found")
//     }
//     user.findOneAndUpdate({
//             username: data.username
//         }, {
//             $set: {
//                 profilePic: updateUser
//             }
//         },
//         (err, result) => {
//             if (err) {
//                 callback(err)
//             } else {
//                 return callback(null, updateUser)
//             }
//         });
// };



module.exports = new admin_model; //exporting admin_model function to avoid schema export