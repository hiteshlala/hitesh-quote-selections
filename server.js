var quotes = require('./data.js');
var app = require('express')();
var port = 3030;

app.get('/', function(req, res) {
  var date = new Date();
  var key = date.getMonth() + '-' + date.getDate();

  if(req.query.callback) {
    res.send(req.query.callback + '(' + JSON.stringify(quotes[key]) + ')');
    
  } else {
    var htmlString = '<!DOCTYPE HTML><html lang="en"><head><meta charset="utf-8">' +
      '<title>Quote For The Day</title></head><body><h1>Quote For The Day</h1><p>' +
      quotes[key].saying +
      '</p><p>' +
      quotes[key].author +
      '</p></body></html>';
    res.send(htmlString);
  }

});

app.listen(process.env.PORT || port, function() {
  console.log('listening on port 3030');
});
