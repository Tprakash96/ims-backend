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

module.exports = { storeUser };
