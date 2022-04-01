var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var counter = 0;
router.get('/last.txt', function(req, res, next) {
  if (counter ==0 ) {
    res.send("");
    counter++;
  }
  else {
    counter++;
    var time = new Date();
    res.send(time);
  }
});

module.exports = router;
