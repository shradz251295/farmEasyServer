const router = require("express").Router();

const Razorpay = require("razorpay");
const transaction = require("./model/farmerModel/transaction");
const tran_service = require("./services/customerService/customer_user")
const keyid = "rzp_test_y3IVf712MU2JMh";
const keysecret = "7yoaB3Qdv70bC85gPcsfejMJ";

const crypto = require("crypto");

router.route("/custplaceOrder").post(function(req, res) {
    var instance = new Razorpay({
        key_id: keyid,
        key_secret: keysecret,
    });
    var options = {
        amount: req.body.amount, // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11",
        payment_capture: 1,
    };
    instance.orders.create(options, function(err, order) {
        if (err) {
            return res.send(err);
        } else {
            return res.json(order);
        }
    });
});

router.route("/custpayment").post(function(req, res) {
    var pass_res = {};

    const generated_signature = crypto.createHmac("sha256", keysecret);
    generated_signature.update(
        req.body.razorpay_order_id + "|" + req.body.transactionid
    );
    if (generated_signature.digest("hex") === req.body.razorpay_signature) {
        const data = {
            transactionid: req.body.transactionid,
            name: req.body.name,
            produceName: req.body.produceName,
            quantity: req.body.quantity,
            transactionamount: req.body.transactionamount / 100,
            orderDate: new Date().toString()
        }

        tran_service.addProduct(data, (err, result) => {
            if (err) {
                pass_res.status = false;
                pass_res.message = err;
                res.status(400).send(pass_res);
            } else {
                pass_res.status = true;
                pass_res.data = result;
                // console.log(pass_res);
                res.status(200).send(pass_res);
            }

        })

        // transaction.save(function(err, savedtransac) {
        //     if (err) {
        //         console.log(err);
        //         return res.status(500).send("Some Problem Occured");
        //     }
        //     res.send({ transaction: savedtransac });
        // });
        // return res.send('success');
    } else {
        return res.send("failed");
    }
});


module.exports = router;