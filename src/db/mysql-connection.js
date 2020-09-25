const mysql = require("mysql");

const util = require("util");
const config = require("../../config");

const mysqlConnection = async () => {
  const mySqlDb = mysql.createConnection({
    host: config.mysqlHostName,
    user: config.mysqlUserName,
    password: config.mysqlPassword,
    database: config.mysqlDatabaseName,
  });

  mySqlDb.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });

  global.db = mySqlDb;
  global.query = util.promisify(mySqlDb.query).bind(mySqlDb);
};

module.exports = { mysqlConnection };
