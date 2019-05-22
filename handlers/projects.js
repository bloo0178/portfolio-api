var express = require("express");
var router = express.Router();
const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.TABLE_NAME;

router.get("/", function(req, res) {
	const params = {
		TableName: TABLE_NAME
    };

	dynamoDb["scan"](params, (error, result) => {
		if (error) {
			console.log(error);
			res.status(400).json({ error: "Could not get projects" });
		} else {
			res.json(result);
		}
	});
});

module.exports = router;
