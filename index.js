const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const express = require("express");
const getCurrent = require("./currentWeather");
const forecast = require("./forecast");
const app = express();

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