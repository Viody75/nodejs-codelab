var localDbConn = require('../lib/localhost_db');
var apiControls = require('../lib/api_controls');

exports.getInventories = function (req, res, next) {
    console.log('Hit Local API Inventories');

    localDbConn.query(`
    SELECT 
    inventories.user_id, 
    inventories.inv_name AS item_name, 
    inventories.inv_qty AS item_qty 
    FROM inventories ORDER BY id DESC`
        , function (err, rows) {

            if (err) {
                req.flash('error', err);
                console.log(err);
            } else {
                apiControls.success(rows, res)

            }
        });
}

exports.addItemInv = function (req, res, next) {
    console.log('Hit Local API Add Item Inv' + req.user);

    let user_id = req.user.id;
    let item_name = req.body.item_name;
    let item_qty = req.body.item_qty;
    let errors = false;

    // if no error
    if (!errors) {

        var form_data = {
            user_id: user_id,
            inv_name: item_name,
            inv_qty: item_qty
        }

        // insert query
        localDbConn.query('INSERT INTO inventories SET ?', form_data, function (err, result) {
            //if(err) throw err
            if (err) {
                // req.flash('error', err)
                apiControls.failed(err, res);

            } else {
                apiControls.createSuccess(result, res, form_data);
            }
        });
    }

}

exports.updateItemInv = function (req, res, next) {
    console.log('Hit Local API Update Item Inv');
}

exports.updateItemInv = function (req, res, next) {
    console.log('Hit Local API Delete Item Inv');
}