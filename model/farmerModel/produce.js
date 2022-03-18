const mongoose = require("mongoose"); //ODM(object document Mapper) framework for MongoDB
var FarmerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        // unique: true
    },
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
    productDescription: {
        type: String,
        required: true
    },
    quantityType: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
});

var farmer = mongoose.model("farmerProduceData", FarmerSchema);

function farmer_model() {}

farmer_model.prototype.sellProduct = (data, image, callback) => {
    data["image"] = 'data:image/jpg;base64, ' + image
    const farmer_data = new farmer(data);
    farmer_data.save((err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};


farmer_model.prototype.getProductList = (data, callback) => {
    farmer.find({}, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};

farmer_model.prototype.deleteProduce = (data, callback) => {
    farmer.deleteOne({ _id: data.id }, (err, result) => {
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

module.exports = new farmer_model();