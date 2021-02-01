var express = require('express');
var router = express.Router();

/* GET main listing. */
router.get('/', function(req, res, next) {
    res.send('this is main menu');
  });
  
  module.exports = router;
  