const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Transactions = new Schema({
    transactionid: {
        type: String,
    },
    name: {
        type: String,
    },
    produceName: {
        type: String,
    },
    quantity: {
        type: String,
    },
    transactionamount: {
        type: String,
    },
    orderDate: {
        type: String,
    }
});
var transaction = mongoose.model("CustomerTransaction", Transactions);


// module.exports = transaction;

function transaction_model() {}

transaction_model.prototype.save = (data, callback) => {
    const transaction_order = new transaction(data);
    transaction_order.save((err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};

transaction_model.prototype.getOrderList = (data, callback) => {
    transaction.find({}, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
}

module.exports = new transaction_model();