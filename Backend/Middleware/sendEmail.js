const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const sendEmail = (req, res, next) => {
  const { name, email, description, mobileNum } = req.body;
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.GMAIL_USERNAME,
    to: email,
    subject: "Mail from Amazon Clone",
    text: `
    Hello ${name}
    We will get in thouch regading your issue - ${description}.
    Thank you for contacting us
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(404).json({
        error: "true",
        message: "could not send email",
      });
    } else {
      console.log("Email Sent: " + info.response);
      next();
    }
  });
};

function getHtmlTemplate({ name, email, profession, mobile, img }) {
  return `
  <!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>

</style>
</head>
<body>

<h2 style="text-align:center">Profile</h2>

<div class="card">
  <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt="John" style="width:100%">
  <h1>${name}</h1>
  <p class="title">${profession}</p>
  <p>${email}</p>
  <p>${mobile}</p>
  <div style="margin: 24px 0;">
    <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
  </div>
  <p><button>Contact</button></p>
</div>

</body>
</html>
  
  `;
}
module.exports = sendEmail;
