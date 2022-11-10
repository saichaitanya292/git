const express = require('express');
const app = express();

// No CORS Headder set
app.get('/', function(request, response) {
  
  response.send("hi");
});

// CORS header `Access-Control-Allow-Origin` set to accept all
app.get('/allow-cors', function(request, response) {
  response.set('Access-Control-Allow-Origin', '*');
  var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "users"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM userdetails", function (err, result) {
      if (err) throw err;
      console.log("Result: " + JSON.stringify(result));
      response.send(result);
    });
  });
 
  
});


app.post('/addusers', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send("POST Request Called");
    //console.log("res",res);
    console.log("req",req.body);
    console.log("add users");
  })
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
