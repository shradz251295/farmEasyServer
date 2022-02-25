const admin_services = require('../../services/admin/adminUser');

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

    admin_services.changePassword(req.body, (err, result) => {
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
            console.log(pass_res);
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
            console.log(pass_res);
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
            console.log(pass_res);
            res.status(200).send(pass_res);
        }
    })
}