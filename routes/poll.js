const express = require("express");
const router = express.Router();
const mg = require('mailgun-js');
const dotenv = require('dotenv');

dotenv.config();

const mailgun = () => mg({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
});

router.post("/", (req, res) => {
  const email = req.body.email;
  const templateVars = {email : email};

  const emailInfo = {
    from: "Decision Maker <postmaster@sandboxc01919f6d65b40f7bba14ed0dc9d97bd.mailgun.org>",
    to: email,
    subject: "Hello",
    html: `<h1 style='display:flex; align-items:center;'><img style='height:100px;' src='http://localhost:8080/images/Decision-Maker-Logo.png'> Decision Maker</h1>
    <h3>Poll Results: "random url here"</h3>
    <h3>Share Poll "random url here"</h3>
    `
  };
  mailgun().messages().send(emailInfo);

  res.render("poll_submitted", templateVars);
});

module.exports = router;
