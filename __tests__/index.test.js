const app = require("../index");
const AWS = require("aws-sdk");
var request = require('supertest');

// need to run "npm run start" to get the local server running, and then run "npm test". May modify the "npm test" script to do all of this...
// modify the req object to pass in custom headers
request = request(`http://localhost:3000`);

test("GET /projects works", function () {
	request.get('/projects')
	.end(function(err, response) {
		if (err) return err;
		expect(response.headers['content-type']).toContain('application/json');
		expect(response.body).toHaveProperty("Items");
		expect(response.body.Items[0]).toHaveProperty("projectId");
		expect(response.body.Items[0]).toHaveProperty("codeUrl");
		expect(response.body.Items[0]).toHaveProperty("demoUrl");
		expect(response.body.Items[0]).toHaveProperty("tech");
		expect(response.body.Items[0]).toHaveProperty("name");
	})
});
