/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
const validator = require("validator");
const isEmail = (value) => validator.isEmail(value);

const validate = (rules) => {
  let isError = false;
  const errMsgs = [];
  rules.forEach((rule) => {
    if (rule.type === "email" && !isEmail(rule.value)) {
      isError = true;
      errMsgs.push({
        errCode: EMAIL_IS_NOT_VALID,
        [rule.fieldName]: "Email is not valid",
      });
    }
  });
  return { isError, errMsgs };
};

module.exports = {
  isEmail,
  validate,
};
