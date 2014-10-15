'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var port = 9393;
var interestRate;
app.listen(port, function(){
	console.log("I am ready to compute on", port)
})

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.get("/interest_rate", function(req, res){
	interestRate = Math.round((Math.random() * (20))*100)/100
	console.log(interestRate)
	return res.status(200).send(JSON.stringify(interestRate));
})