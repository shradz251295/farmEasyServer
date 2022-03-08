const farmer_services = require('../../services/farmer/farmer_user');

exports.register = (req, res) => {

    var res_result = {};
    if (req.body == null) {
        res_result.status = false;
        res_result.message = 'Field is empty';
        res.status(404).send(res_result);
    }

    farmer_services.register(req.body, (err, result) => {
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

    farmer_services.login(req.body, (err, result) => {
        if (err) {
            pass_res.status = false;
            pass_res.message = err;
            res.status(400).send(pass_res);
        } else {
            pass_res.status = true;
            pass_res.data = result;
            console.log(pass_res);
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

    farmer_services.changePassword(req.body, (err, result) => {
        if (err) {
            pass_res.status = false;
            pass_res.message = err;
            res.status(400).send(pass_res);
        } else {
            pass_res.status = true;
            pass_res.data = result;
            console.log(pass_res);
            res.status(200).send(pass_res);
        }

    })
}

exports.getFarmerList = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    farmer_services.getFarmerList(req.body, (err, result) => {
        if (err) {
            pass_res.status = false;
            pass_res.message = err;
            res.status(400).send(pass_res);
        } else {
            pass_res.status = true;
            pass_res.data = result;
            console.log(pass_res);
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

    farmer_services.editProfile(req.body, (err, result) => {
        if (err) {
            pass_res.status = false;
            pass_res.message = err;
            res.status(400).send(pass_res);
        } else {
            pass_res.status = true;
            pass_res.data = result;
            console.log(pass_res);
            res.status(200).send(pass_res);
        }

    })
}


exports.sellProduct = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    farmer_services.sellProduct(req.body, (err, result) => {
        if (err) {
            pass_res.status = false;
            pass_res.message = err;
            res.status(400).send(pass_res);
        } else {
            pass_res.status = true;
            pass_res.data = result;
            console.log(pass_res);
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

    farmer_services.getProductList(req.body, (err, result) => {
        if (err) {
            pass_res.status = false;
            pass_res.message = err;
            res.status(400).send(pass_res);
        } else {
            pass_res.status = true;
            pass_res.data = result;
            console.log(pass_res);
            res.status(200).send(pass_res);
        }

    })
}