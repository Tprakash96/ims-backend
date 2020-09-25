const { loginIn, signup } = require("../controller/login");

module.exports = (app) => {
  app.post("/api/login", loginIn);
  app.post("/api/signup", signup);
};
