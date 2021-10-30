exports.success = function (values, res) {
    var data = {
        'status': 200,
        'message': 'OK',
        'data': values
    };
    res.json(data);
    res.end();
};

exports.createSuccess = function (values, res, inputs) {
    res.status(201)
    var data = {
        'status': 201,
        'message': 'Create Success',
        'data': inputs
    };
    res.json(data);
    res.end();
};

exports.updateSuccess = function (values, res, inputs) {
    res.status(202)
    var data = {
        'status': 202,
        'message': 'Update Success',
        'data': inputs
    };
    res.json(data);
    res.end();
}

exports.deleteSuccess = function (values, res) {
    res.status(202)
    var data = {
        'status': 202,
        'message': 'Delete Success'
    }
    res.json(data);
    res.end();
}

exports.failed = function (err, res) {
    res.status(400)
    var data = {
        'status': 400,
        'message': 'Failed',
        'detail': err
    };
    res.json(data);
    res.end();
}

