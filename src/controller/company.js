const { store, list, getContactPersonEmail } = require("../modal/company");
const { sendEmail } = require("../utils/email");

const storeCompany = async (req, res) => {
  try {
    const { name, personName, email, address, products } = req.body;
    const result = await store({ name, personName, email, address, products });
    if (result === 1) res.send({ status: 2000, message: "company created" });
    else {
      res.send("something went wrong");
    }
  } catch (ex) {
    res.send(ex);
  }
};

const getCompanyList = async (req, res) => {
  try {
    const result = await list();
    res.status(200).send({ result });
  } catch (ex) {
    res.send(ex);
  }
};

const sendEmailToContactPerson = async (req, res) => {
  try {
    const { id } = req.body;
    const { email } = await getContactPersonEmail(id);
    const result = await sendEmail(email, id);
    res.send(result);
  } catch (ex) {
    res.send(ex);
  }
};

module.exports = {
  storeCompany,
  getCompanyList,
  sendEmailToContactPerson,
  getContactPersonEmail,
};
