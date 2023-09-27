const express = require("express");
const router = express.Router();
const mg = require('mailgun-js');
const dotenv = require('dotenv');
const pollQueries = require('../db/queries/polls');
const userQueries = require('../db/queries/users');
const { generateRandomString, getChoices, insertAllChoices } = require('../public/scripts/helpers.js');

dotenv.config();

const mailgun = () => mg({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
});

router.post("/", (req, res) => {
  const email = req.body.email;
  const pollId = generateRandomString();
  const pollTitle = req.body.pollTitle;
  const questionTitle = req.body.questionTitle;
  const choices = getChoices(req.body);

  userQueries.createUser(email)
    .then(user=>{
      return pollQueries.insertPoll([pollId, pollTitle, questionTitle, user.id]);
    })
    .then(() => {
      return insertAllChoices(choices, pollId);
    })
    .then(() => {
      const emailInfo = {
        from: "Decision Maker <postmaster@sandboxc01919f6d65b40f7bba14ed0dc9d97bd.mailgun.org>",
        to: email,
        subject: "Here's your Poll!",
        html: `<div style='height: 100vh; background-color: #fcf4de; display: flex; flex-direction: column; align-items:center;'><img style='height: 400px' src='https://github.com/VagrantGinger68/Lighthouse-Midterm/blob/ryan/public/images/decision-maker-logo.png?raw=true'>
        <h1>Here are the links for your poll!</h1>
        <h2>Poll Results: <a href="http://localhost:8080/results/${pollId}">http://localhost:8080/results/${pollId}</a></h2>
        <h2>Share Poll: <a href="http://localhost:8080/submissions/${pollId}">http://localhost:8080/submissions/${pollId}</a></h2>
        </div>
        `
      };
      return mailgun().messages().send(emailInfo);
    })
    .then(() => {
      const templateVars = {email, pollId};
      res.render("poll_submitted", templateVars);
    });
});

module.exports = router;
