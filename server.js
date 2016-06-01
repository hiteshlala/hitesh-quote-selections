var quotes = require('./data.js');
var app = require('express')();
var port = 3030;

app.get('/', function(req, res) {
  var date = new Date();
  var key = date.getMonth() + '-' + date.getDate();
  var data = quotes[key];

  if(!data) {
    data = {saying:'I have not selected a quote for this day yet!', author:'Hitesh'};
  }

  if(req.query.callback) {
    res.send(req.query.callback + '(' + JSON.stringify(data) + ')');
    
  } else {
    var htmlString = '<!DOCTYPE HTML><html lang="en"><head><meta charset="utf-8">' +
      '<title>Quote For The Day</title></head><body><h1>Quote For The Day</h1><p>' +
      data.saying +
      '</p><p>' +
      data.author +
      '</p></body></html>';
    res.send(htmlString);
  }

});

app.listen(process.env.PORT || port, function() {
  console.log('listening on port 3030');
});
