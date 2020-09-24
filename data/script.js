const mysql = require("mysql");
const fs = require("fs");
const readline = require("readline");

const config = require("../config");

const myCon = mysql.createConnection({
  host: config.mysqlHostName,
  port: config.mysqlPort,
  database: config.mysqlDatabaseName,
  user: config.mysqlUserName,
  password: config.password,
});

const rl = readline.createInterface({
  input: fs.createReadStream("./data/schema.sql"),
  terminal: false,
});
rl.on("line", function (chunk) {
  myCon.query(chunk.toString("ascii"), function (err, sets, fields) {
    if (err) console.log(err);
  });
});
rl.on("close", function () {
  console.log("finished");
  myCon.end();
});
