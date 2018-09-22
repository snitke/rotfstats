const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

// Setup the express static files to send to the client
app.use("/static", express.static("client"));

app.route("/")
  .get((req, res) => {

    res.sendFile(path.join(__dirname + "/../client/index.html"));
  });

app.listen(3000, () => {
  console.log("Server started! Go to 'localhost:3000' in your browser.");
});