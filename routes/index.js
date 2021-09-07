var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is a node app hello from Azure pipeline' });
  res.render('index', {body: "From giri"});
});

module.exports = router;
