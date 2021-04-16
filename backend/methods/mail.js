require("dotenv").config;
const nodemailer = require("nodemailer");

exports.sendMail = async (to, password) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: to,
    subject: "Account Created",
    html: `
    <h1>Congratulations your account has been created successfully !</h1>
    <p>This is your password : ${password} </p>
    
    `,
  };

  let info = await transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return console.log("Error occurs");
    }
  });
};
