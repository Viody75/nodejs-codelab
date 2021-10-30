var express = require('express');
var router = express.Router();

var localDbConn = require('../lib/localhost_db');

var booksApiController = require('../controllers/books_api_controller');

// get books data
router.get('/getbooks', booksApiController.getbooks);

// add a new book
router.post('/addbook', booksApiController.addbook);

// update a book
router.put('/updatebook', booksApiController.updatebook);

// delete a book
router.post('/deletebook', booksApiController.deletebook);

module.exports = router;