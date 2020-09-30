const { loginIn, signup } = require("../controller/login");
const {
  storeCompany,
  getCompanyList,
  sendEmailToContactPerson,
} = require("../controller/company");
const { storeOnBoard, getOnboardDetails } = require("../controller/onboard");

module.exports = (app) => {
  //user
  app.post("/api/login", loginIn);
  app.post("/api/signup", signup);

  //company
  app.post("/api/company", storeCompany);
  app.get("/api/company", getCompanyList);
  app.post("/api/email", sendEmailToContactPerson);

  //onBoard
  app.post("/api/onBoard", storeOnBoard);
  app.get("/api/onBoard", getOnboardDetails);
};
