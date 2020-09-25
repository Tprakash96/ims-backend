/* eslint-disable no-underscore-dangle */
// const jwt = require("jsonwebtoken");
// const { jwtSecret } = require("../../config");

const bcrypt = require("bcrypt");
const { storeUser } = require("../modal/user");

const loginIn = async (req, res) => {
  try {
    res.send("Hi, i'm login controller....");
  } catch (ex) {
    console.log(ex);
  }
};

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, 10);
    const result = await storeUser({ email, password: encryptedPassword });

    if (result === 1)
      res.status(201).send({ status: 2000, message: "row inserted" });
    else res.send("Something went wrong..");
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = {
  loginIn,
  signup,
};
