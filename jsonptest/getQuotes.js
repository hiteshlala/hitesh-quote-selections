var jsonpRequest = function(url, callback) {
  var elem = document.getElementById('container');
  var node = document.createElement('script');
  node.src = url + '/?callback=(' + callback +')';
  elem.appendChild(node);
};

// change this to wherver the server is being hosted
var hostUrl = 'http://localhost:3030';

jsonpRequest(hostUrl, function (data) {
    var elem = document.getElementById('container');
    var node = document.createElement('p');
    node.innerHTML = data.saying;
    elem.appendChild(node);
    node = document.createElement('p');
    node.innerHTML = data.author;
    elem.appendChild(node);
});

// jsonpRequest(hostUrl, function (data) {
//      console.log(data.saying);
// });

// jsonpRequest(hostUrl, function (data) {
//      console.log(data.author);
// });
