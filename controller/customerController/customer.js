const customer_service = require('../../services/customerService/customer_user');
const fs = require('fs')

exports.register = (req, res) => {

    var res_result = {};
    if (req.body == null) {
        res_result.status = false;
        res_result.message = 'Field is empty';
        res.status(404).send(res_result);
    }

    customer_service.register(req.body, (err, result) => {
        if (err) {
            res_result.status = false;
            res_result.message = err;
            res.status(400).send(res_result);
        } else {
            res_result.status = true;
            res_result.data = result;
            res.status(200).send(res_result);
        }
    })

}


exports.login = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    customer_service.login(req.body, (err, result) => {
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
}

exports.changePassword = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    customer_service.changePassword(req.body, (err, result) => {
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
}

exports.editProfile = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    customer_service.editProfile(req.body, (err, result) => {
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
}

exports.getProductList = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    customer_service.getProductList(req.body, (err, result) => {
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
}


exports.getCustomerList = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    customer_service.getCustomerList(req.body, (err, result) => {
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
}