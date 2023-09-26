const express = require("express");
const router = express.Router();
const mg = require('mailgun-js');
const dotenv = require('dotenv');
const pollQueries = require('../db/queries/polls');
const userQueries = require('../db/queries/users');
const submissionQueries = require('../db/queries/submissions');
const { generateRandomString, getChoices, insertAllChoices } = require('../public/scripts/helpers.js');

dotenv.config();

const mailgun = () => mg({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
});

router.get("/:id", (req, res) => {
  const pollId = req.params.id;

  const pollsPromise = pollQueries.getPollById(pollId);
  const choicesPromise = pollQueries.getChoicesByPoll(pollId);

  // using database
  Promise.all([pollsPromise, choicesPromise])
    .then(([poll, choices]) => {
      if (!poll) return res.redirect("/notFound");
      
      const templateVars = {
        poll_id: poll.id,
        title: poll.title,
        question: poll.question,
        choices: choices
      };
      //console.log(templateVars[choices]);
      return res.render("submission", templateVars);
    });
});

router.post("/:id", (req, res) => {
  const pollId = req.params.id;

  let submitterName = req.body.submitter;

  if (submitterName === '') {
    submitterName = 'Anonymous';
  }

  let choices = getChoices(req.body);
  let points = [];
  
  for (let i = 0; i < choices.length; i++) {
    points.push(choices.length - Number(choices[i]));
  }
  
  submissionQueries.createSubmission(pollId, points)
  .then(() => {
    return userQueries.getUserEmailByPollId(pollId);
  })
  .then ((email) => {
    
    const emailInfo = {
      from: "Decision Maker <postmaster@sandboxc01919f6d65b40f7bba14ed0dc9d97bd.mailgun.org>",
      to: email,
      subject: `${submitterName} has answered your Poll!`,
      html: `<div style='height: 100vh; background-color: #fcf4de; display: flex; flex-direction: column; align-items:center;'><img style='height: 400px' src='https://github.com/VagrantGinger68/Lighthouse-Midterm/blob/ryan/public/images/decision-maker-logo.png?raw=true'>
      <h1>Here is the link for the results!</h1>
      <h2>Poll Results: <a href="http://localhost:8080/results/${pollId}">http:localhost:8080/results/${pollId}</a></h2>
      </div>
      `
    };
    return mailgun().messages().send(emailInfo);
  })
  .then (() => {
    res.render("answer_submitted");
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
