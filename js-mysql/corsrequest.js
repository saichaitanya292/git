var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())


const bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.post('/process_post',function (req, res, next) {
  res.json({msg: req.body})
//   console.log("received",JSON.stringify(req.body[0]));
//   var inrow = document.createElement("div");
//   inrow.classList.add("row");
//   inrow.setAttribute('id','invoicerow');
//   document.getElementById(invoicerow).innerHTML = "hi";
//   const { jsPDF } = require("jspdf"); // will automatically load the node version
//   const doc = new jsPDF();

// doc.html(elementHTML, {
//     callback: function(doc) {
//         // Save the PDF
//         doc.save('sample-document.pdf');
//     },
//     x: 15,
//     y: 15,
//     width: 170, //target width in the PDF document
//     windowWidth: 650 //window width in CSS pixels
// });

})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})