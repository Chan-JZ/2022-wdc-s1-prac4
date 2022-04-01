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

var counter2 = 0;
var color;
router.get('/color.html', function(req, res, next) {
    switch (counter2) {
      case 0:
        color = "red";
        break;
      case 1:
        color = "yellow";
        break;
      case 2:
        color = "green";
        break;
      case 3:
        color = "blue";
        break;
    }
    res.send(
      `<!DOCTYPE html>
      <html lang="en">
          <head>
              <title>A title</title>
          </head>

          <body>
              <h1 style="color:${color};">${color}</h1>
          </body>
      </html>`
    );
    counter2++;
    counter2 = counter2 % 4;
});

module.exports = router;
