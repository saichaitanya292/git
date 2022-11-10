var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.post('/process_post', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   };  
   console.log(response);  
   //res.end(JSON.stringify(response)); 
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
   var sql = "INSERT INTO userdetails (user_name, user_password) VALUES ?";  
   var values = [  
   [req.body.first_name,req.body.last_name]
   ];  
   con.query(sql, [values], function (err, result) {  
   if (err) throw err;  
   console.log("Number of records inserted: " + result.affectedRows);  
   });  
   });  
   

})  
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  