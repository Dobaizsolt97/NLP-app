const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
var bodyParser = require("body-parser");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const APIrespone = {
  polarity: "default",
  subjectivity: "default",
  article: "Hello human, i no npt like you"
};
const app = express();
app.use(express.static("dist"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
  const textToAnalize = APIrespone.article;
  textapi.sentiment(
    {
      text: `${textToAnalize}`
    },
    function(error, response) {
      if (error === null) {
        const { polarity, subjectivity } = response;
        APIrespone.polarity = polarity;
        APIrespone.subjectivity = subjectivity;
        console.log(APIrespone);
        res.send(APIrespone);
      }
    }
  );
});

app.post("/test", function(req, res) {
  console.log(`tishi is it ${req.body.value}`);
  APIrespone.article = req.body.value;
  res.json("added");
});
