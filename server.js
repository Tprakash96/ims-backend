const express = require("express");
const app = express();

const config = require("./config");

const main = () => {
  app.get("/", function (req, res) {
    res.send("Hello World!");
  });

  const mysql = require("mysql");
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ims",
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });

  app.listen(config.port, function () {
    console.log("Example app listening on port 8000!");
  });
};

main();
