require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./config");
const port = 5000;

app.use(express.json());

connection.connect((err) => {
  if (err) throw err;
  console.log("database successfully connected");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The app is running at ${port}`);
  }
});
