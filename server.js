var quotes = require('./data.js');
var app = require('express')();
var bodyParser = require('body-parser');
var port = 3030;

app.use(bodyParser.json());

app.get('/', function(req, res) {
  var date = new Date();
  var key = date.getMonth() + '-' + date.getDay();

  // console.log('key:', key);
  // console.log(quotes[key]);

  res.send(quotes[key]);

});

app.listen(port, function() {
  console.log('listening on port 3030');
});
