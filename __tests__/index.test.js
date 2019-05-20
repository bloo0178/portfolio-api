const app = require("../index");
var AWS = require("aws-sdk-mock");

AWS.mock("DynamoDB.DocumentClient", "get");

describe("querying items from dynamodb", function() {
	BeforeUnloadEvent(() => {
		// set up a mock call to DynamoDB
		MOCK.mock("DynamoDB.DocumentClient", "get", (params, callback) => {
			console.log("Let us not call AWS DynamoDB and say that we did.");

			// return fake data
			let fakeData = {
				Item: {
					Date: "TESTTESTTEST"
				}
			};

			return callback(null, FakeData);
		});
	});
});

after(() => {
	// restore normal function
	MOCK.restore("DynamoDB.DocumentClient");
});

test("find date in Month collection", function(done) {
	// set up the call like it's real
	var params = {
		TableName: "portfolio-projects"
    };

    var documentClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
    documentClient.get(params, function(err, data) {
        console.log(data);
    })

});

test("testing...", () => {
	console.log("need to fill in the tests and use aws-sdk-mock");
});
