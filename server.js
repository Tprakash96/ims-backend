const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const { mysqlConnection } = require("./src/db/mysql-connection");
const config = require("./config");

const main = () => {
  app.use(bodyParser.urlencoded({ extended: "true" }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(bodyParser.json({ type: "application/vnd.api+json" }));
  require("./src/routes/index")(app);

  mysqlConnection();
  app.listen(config.port, function () {
    console.log("Example app listening on port 8000!");
  });
};

main();
