var quotes = require('./data.js');
var app = require('express')();
var port = 3030;

app.get('/', function(req, res) {
  var date = new Date();
  var key = date.getMonth() + '-' + date.getDay();

  if(req.query.callback) {
    res.send(req.query.callback + '(' + JSON.stringify(quotes[key]) + ')');
    
  } else {
    res.send(quotes[key]);
  }

});

app.listen(port, function() {
  console.log('listening on port 3030');
});
