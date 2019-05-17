# Portfolio Projects API (May 2019)

This replaces the existing project "portfolio-site-api."

## Description 

This is the code for the API that is used to provide my portfolio site with project data that is ultimately populated into project cards. 

## Deploy

Run the following command: 
- serverless deploy

## Teardown 

Run the following command: 
- serverless remove

## Testing

After deploying, run the following from AWS CLI to verify the service is up and running (in addition to the Jest unit/ integration tests):
- aws apigateway test-invoke-method --rest-api-id (api id here) --resource-id (resource id here) --http-method (method here - 'GET', 'POST', etc.)

You can use the following to obtain info on your service: 
- serverless info 
- aws apigateway get-resources --rest-api-id (api ID here)

The API ID can be obtained using serverless info above. It will provide you with your AWS endpoints. In the URL, the text after https:// is your API ID. (i.e. https://caufjc1cde.execute-api.us-east-1.amazonaws.com/dev/projects --> caufjc1cde is my API ID). Then use the get-resources AWS command to obtain your resource-id

## Useful links

- https://serverless.com/blog/serverless-express-rest-api/
- https://serverless.com/framework/docs/providers/aws/guide/quick-start/