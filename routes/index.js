var express = require('express');
var router = express.Router();
const path = require('path');

router.use (function (req,res,next) {
  console.log('/' + req.method);
  next();
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
