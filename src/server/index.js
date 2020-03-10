const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const APIrespone = {
  polarity: "default",
  subjectivity: "default"
};
const app = express();
app.use(express.static("dist"));

app.get("/", function(req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("/dist/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});

var AYLIENTextAPI = require("aylien_textapi");
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.get("/test", function(req, res) {
  res.send(APIrespone);
});
/* 
textapi.sentiment(
  {
    text: "I do not like his atitude"
  },
  function(error, response) {
    if (error === null) {
      const { polarity, subjectivity } = response;
      APIrespone.polarity = polarity;
      APIrespone.subjectivity = subjectivity;
      console.log(APIrespone);
    }
  }
); */
