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
  const pollTitle = req.body.pollTitle;
  const questionTitle = req.body.questionTitle;

  const templateVars = {email : email};

  const emailInfo = {
    from: "Decision Maker <postmaster@sandboxc01919f6d65b40f7bba14ed0dc9d97bd.mailgun.org>",
    to: email,
    subject: "Here's your Poll!",
    html: `<div style='height: 100vh; background-color: #fcf4de; display: flex; flex-direction: column; align-items:center;'><img style='height: 400px' src='https://github.com/VagrantGinger68/Lighthouse-Midterm/blob/ryan/public/images/decision-maker-logo.png?raw=true'>
    <h1>Here are the links for your poll!</h1>
    <h2>Poll Results: "random url here"</h2>
    <h2>Share Poll: "random url here"</h2>
    </div>
    `
  };
  mailgun().messages().send(emailInfo);

  res.render("poll_submitted", templateVars);
});

module.exports = router;
