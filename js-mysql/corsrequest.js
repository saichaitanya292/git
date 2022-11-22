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

})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})