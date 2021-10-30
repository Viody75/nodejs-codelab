var express = require('express');
var router = express.Router();
var dbConn = require('../lib/db');
var localDbConn = require('../lib/localhost_db');

// get books data
router.get('/getbooks', function (req, res) {
    console.log('Hit local API : /books');

    localDbConn.query('SELECT * FROM books ORDER BY id desc', function (err, rows) {

        if (err) {
            req.flash('error', err);
            console.log(err);
        } else {

            res.json(rows);
            res.end;

        }
    });
});

module.exports = router;