var express = require('express');
var app = express();
var request = require('request');

const port = process.env.PORT || 5000;

// Cors to access data outside of scope of project
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Set up the options for the request
const options = {  
  url: 'https://next.json-generator.com/api/json/get/EkzBIUWNL',
  method: 'GET',
  headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
  }
};

// Returns a single object for the products page
app.get('/api/getSingle', function (req, res) {
  request(options, function(err, response, body) {  
    var json = JSON.parse(body);
    res.json(json[0]);
  });
});

// Returns whole response to be used for all products page
app.get('/api/getMany', function (req, res) {
  request(options, function(err, response, body) {  
    var json = JSON.parse(body);
    res.json(json);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
