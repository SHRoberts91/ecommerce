var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var productCtrl = require('./controllers/productCtrl')
// var ObjectId = require('mongodb').ObjectId;

var app = express();
app.use(express.static(__dirname + './public'))
app.use(cors());
app.use(bodyParser.json());

var mongoUri = "mongodb://localhost:27017/eCommerce"
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
    console.log('successfully connected to mongodb')
})




// var db = mongojs('eCommerce', ['products']);
app.post('/api/products', productCtrl.create)

app.get('/api/products', productCtrl.read)

app.put('/api/products/:id', productCtrl.update)

app.delete('/api/products/:id', productCtrl.delete)

var nodePort = 9011;

app.listen(nodePort, function(){
     console.log(nodePort + " is running!")
});