const { v4: uuid } = require("uuid");

const storeUser = async (params) => {
  try {
    const { email, password } = params;
    const userId = uuid();
    const values = [userId, email, password];
    const sql = "INSERT INTO users (userId,email,password) VALUES(?,?,?)";
    const results = await query(sql, values);
    return results.affectedRows;
  } catch (ex) {
    console.log("Error ==>", ex);
    return ex;
  }
};

const getUser = async (emailId) => {
  try {
    const sql = "SELECT * FROM users where email=?";
    const results = await query(sql, [emailId]);
    const data = {};
    if (results.length && results) {
      data.userId = results[0].userId;
      data.email = results && results[0].email;
      data.password = results && results[0].password;
    }
    return data;
  } catch (ex) {
    return ex;
  }
};

module.exports = { storeUser, getUser };
