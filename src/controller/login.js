const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { storeUser, getUser } = require("../modal/user");
const { isEmail } = require("../utils/validator");

const loginIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUser(email);
    if (!Object.keys(user).length) {
      res.send("Invalid Username/password");
    } else {
      const { userId } = user;
      if (!bcrypt.compareSync(password, user.password)) {
        res.send("Invalid Password");
      } else {
        const token = jwt.sign({ userId, email }, "secret", {
          algorithm: "HS256",
          // expiresIn: jwtExpiry,
        });
        res.json({ userId: user.userId, email: user.email, token });
      }
    }
  } catch (ex) {
    console.log(ex);
    res.status(500).send("something went wrong");
  }
};

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, 10);
    const isValid = isEmail(email);
    console.log({ isValid });
    if (isValid) {
      const isExit = await getUser(email);
      console.log({ isExit: isExit.length });
      if (!Object.keys(isExit).length) {
        const result = await storeUser({ email, password: encryptedPassword });
        if (result === 1)
          res.status(201).send({ status: 2000, message: "row inserted" });
        else res.send("Something went wrong");
      } else res.send("Email is already exist");
    } else {
      res.send("Email is not valid");
    }
  } catch (ex) {
    console.log(ex);
    res.status(500).send("something went wrong");
  }
};

module.exports = {
  loginIn,
  signup,
};
