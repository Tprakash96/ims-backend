const { store, update, get } = require("../modal/onboard");

const storeOnBoard = async (req, res) => {
  try {
    const {
      contactPersonId,
      vendorName,
      constitutionVendor,
      field,
      natureOfScope,
    } = req.body;

    const contactPersonDetails = await get({ id: contactPersonId });
    let result = "";
    if (!contactPersonDetails.length) {
      result = await store({
        contactPersonId,
        vendorName,
        constitutionVendor,
        field,
        natureOfScope,
      });
    } else {
      result = await update({
        contactPersonId,
        vendorName,
        constitutionVendor,
        field,
        natureOfScope,
      });
    }
    if (result === 1) res.send({ status: 2000, message: "onBoard was addded" });
    else {
      res.send("something went wrong");
    }
  } catch (ex) {
    res.send(ex);
  }
};

const getOnboardDetails = async (req, res) => {
  try {
    const { contactPersonId } = req.query;
    const result = await get({ id: contactPersonId });
    res.status(200).send(result[0]);
  } catch (ex) {
    return ex;
  }
};

module.exports = {
  storeOnBoard,
  getOnboardDetails,
};
