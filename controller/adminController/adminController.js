const admin_services = require('../../services/admin/adminUser');
const multer = require('multer')
const fs = require('fs')

exports.login = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    admin_services.login(req.body, (err, result) => {
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

    admin_services.changePassword(req.body, (err, result) => {
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

    admin_services.editProfile(req.body, (err, result) => {
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

exports.getAdminList = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    admin_services.getAdminList(req.body, (err, result) => {
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

exports.addState = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    admin_services.addState(req.body, (err, result) => {
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


exports.getState = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    admin_services.getState(req.body, (err, result) => {
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


exports.addCity = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    admin_services.addCity(req.body, (err, result) => {
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

exports.getCity = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    admin_services.getCity(req.body, (err, result) => {
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

exports.deleteState = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    admin_services.deleteState(req.body, (err, result) => {
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

exports.addFarmerKit = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }
    let imageString = new Buffer(fs.readFileSync(req.file.path)).toString("base64")
    admin_services.addFarmerKit(req.body, imageString, (err, result) => {
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


exports.uploadKit = (req, res, next) => {
    var res_result = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    } else {
        let imageString = new Buffer(fs.readFileSync(req.file.path)).toString("base64")
        admin_services.uploadKit(imageString, (err, result) => {
            if (err) {
                pass_res.status = false;
                pass_res.message = err;
                res.status(400).send(pass_res);
            } else {
                res_result.status = true;
                res_result.data = result;
                res.status(200).send(res_result);
            }
        })
    }
}


exports.getProductList = (req, res) => {
    var pass_res = {};
    if (req.body == null) {
        pass_res.status = false;
        pass_res.message = 'field is empty';
        res.status(404).send(pass_res);
    }

    admin_services.getProductList(req.body, (err, result) => {
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