const { v4: uuid } = require("uuid");

const store = async (params) => {
  try {
    const { name, personName, email, address, products } = params;
    const id = uuid();
    const values = [id, name, personName, email, address, products];
    const sql =
      "INSERT INTO company (id,name,personName,email,address,product) VALUES(?,?,?,?,?,?)";
    const results = await query(sql, values);
    return results.affectedRows;
  } catch (ex) {
    console.log("Error ==>", ex);
    return ex;
  }
};

const list = async () => {
  try {
    const sql = "SELECT * FROM  company";
    const results = await query(sql);
    return results;
  } catch (ex) {
    console.log("Error ==>", ex);
    return ex;
  }
};

const getContactPersonEmail = async (id) => {
  try {
    const sql = "SELECT * FROM  company WHERE id = ?";
    const results = await query(sql, [id]);
    return {
      id: results[0].id,
      userId: results[0].userId,
      email: results[0].email,
    };
  } catch (ex) {
    console.log("Error ==>", ex);
    return ex;
  }
};

module.exports = { store, list, getContactPersonEmail };
