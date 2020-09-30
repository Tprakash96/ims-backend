const { v4: uuid } = require("uuid");

const store = async (params) => {
  try {
    const {
      contactPersonId,
      vendorName,
      constitutionVendor,
      field,
      natureOfScope,
    } = params;
    const id = uuid();
    const values = [
      id,
      contactPersonId,
      vendorName,
      constitutionVendor,
      field,
      natureOfScope,
    ];
    const sql =
      "INSERT INTO onboard (id,contactPersonId,vendorName,constitutionVendor,field,natureOfScope) VALUES(?,?,?,?,?,?)";
    const results = await query(sql, values);
    return results.affectedRows;
  } catch (ex) {
    console.log("Error ==>", ex);
    return ex;
  }
};

const update = async (params) => {
  try {
    const {
      contactPersonId,
      vendorName,
      constitutionVendor,
      field,
      natureOfScope,
    } = params;
    const values = [
      vendorName,
      constitutionVendor,
      field,
      natureOfScope,
      contactPersonId,
    ];
    const sql =
      "UPDATE  onboard " +
      "SET vendorName = ? ,constitutionVendor = ? ,field = ? ,natureOfScope = ? " +
      "WHERE contactPersonId = ?";
    const results = await query(sql, values);
    return 1;
  } catch (ex) {
    console.log("Error ==>", ex);
    return ex;
  }
};

const get = async (params) => {
  try {
    const { id } = params;
    const sql = "SELECT * FROM onboard WHERE contactPersonId = ?";
    const results = await query(sql, [id]);
    return results;
  } catch (ex) {
    console.log("Error ==>", ex);
    return ex;
  }
};

module.exports = { store, update, get };
