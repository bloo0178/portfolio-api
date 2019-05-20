const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" }); // delete this line from here, but add to test scripts

require("dotenv").config();

const TABLE_NAME = process.env.TABLE_NAME;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({ strict: false }));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.get("/projects", function(req, res) {
	const params = {
		TableName: TABLE_NAME
		//TableName: "portfolio-projects"
	};

	dynamoDb.scan(params, (error, result) => {
		if (error) {
			console.log(error);
			res.status(400).json({ error: "Could not get projects" });
		} else {
			res.json(result);
		}
	});
});

/*
app.listen(3000, () => {
	console.log("App listening on port 3000");
});
*/

module.exports.handler = serverless(app);
