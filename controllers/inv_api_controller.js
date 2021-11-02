var localDbConn = require('../lib/localhost_db');
var apiControls = require('../lib/api_controls');

exports.getInventories = function (req, res, next) {
    console.log('Hit Local API Inventories');

    localDbConn.query('SELECT inventories.inv_name AS item_name, inventories.inv_qty AS item_qty FROM inventories ORDER BY DESC', function (err, rows) {

        if (err) {
            req.flash('error', err);
            console.log(err);
        } else {
            apiControls.success(rows, res)

        }
    });
}

exports.addItemInv = function (req, res, next) {
    console.log('Hit Local API Add Item Inv');

}

exports.updateItemInv = function (req, res, next) {
    console.log('Hit Local API Update Item Inv');
}

exports.updateItemInv = function (req, res, next) {
    console.log('Hit Local API Delete Item Inv');
}