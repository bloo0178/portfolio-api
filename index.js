const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const projects = require('./handlers/projects');
const express = require("express");
const app = express();
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" }); // delete this line from here, but add to test scripts

require("dotenv").config();

app.use(bodyParser.json({ strict: false }));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use('/projects', projects); 

/*
app.listen(3000, () => {
	console.log("App listening on port 3000");
});
*/

module.exports.handler = serverless(app);
