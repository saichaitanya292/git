var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   next();
 });


app.post('/process_post', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   };  
   console.log(response);  
   //res.end(JSON.stringify(response)); 
   const { jsPDF } = require("jspdf"); // will automatically load the node version
   const doc = new jsPDF();
   doc.text("Hello world!", 10, 10);
   doc.save("a4.pdf");
   
   
   

})  
var server = app.listen(9000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  

