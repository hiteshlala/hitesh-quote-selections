var jsonpRequest = function(url, callback) {
  var elem = document.getElementById('container');
  var node = document.createElement('script');
  node.src = url + '/?callback=(' + callback +')';
  elem.appendChild(node);
};


var hostUrl = 'http://localhost:3030';

jsonpRequest(hostUrl, function (data) {
    console.log(data);
});

jsonpRequest(hostUrl, function (data) {
     console.log(data.saying);
});

jsonpRequest(hostUrl, function (data) {
     console.log(data.author);
});
