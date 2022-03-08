const mongoose = require("mongoose"); //ODM(object document Mapper) framework for MongoDB
var FarmerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
    },
});

var farmer = mongoose.model("farmerProduceData", FarmerSchema);

function farmer_model() {}

farmer_model.prototype.sellProduct = (data, callback) => {
    console.log(data)
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

module.exports = new farmer_model();