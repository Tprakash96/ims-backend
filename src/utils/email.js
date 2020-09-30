const nodemailer = require("nodemailer");
const { senderEmail, senderEmailPassword, hostName } = require("../../config");

async function sendEmail(to, id) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: senderEmail,
      pass: senderEmailPassword,
    },
  });

  let info = await transporter.sendMail({
    from: `Prakash T <${senderEmail}>`, // sender address
    to: to, // list of receivers
    subject: "Form Link",
    text: "Submit your details",
    html: `<a href="${hostName}email/form/${id}">click</a>`,
  });

  return info.messageId;
}

module.exports = { sendEmail };
