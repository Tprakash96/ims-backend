const dotenv = require("dotenv");

dotenv.config();

const ENV = process.env;

module.exports = {
  port: parseInt(ENV.PORT || "8000", 10),
  database: ENV.DATABASE,
  mysqlPort: ENV.MYSQL_PORT,
  mysqlHostName: ENV.MYSQL_HOSTNAME,
  mysqlUserName: ENV.MYSQL_USER_NAME,
  mysqlPassword: ENV.MYSQL_PASSWORD,
  mysqlDatabaseName: ENV.MYSQL_DATABASENAME,
};
