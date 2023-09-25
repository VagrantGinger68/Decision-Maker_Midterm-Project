const express = require("express");
const router = express.Router();
const pollQueries = require('../db/queries/polls');

router.get("/:id", (req, res) => {
  const pollId = req.params.id;

  const pollsPromise = pollQueries.getPollById(pollId);
  const choicesPromise = pollQueries.getChoicesByPoll(pollId);

  // using database
  Promise.all([pollsPromise, choicesPromise])
    .then(([poll, choices]) => {
      const templateVars = {
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

  pollQueries.insertPoll(pollId)
    .then((poll) => {
      const templateVars = poll;
      return res.render("answer_submitted", templateVars); // temporary page name until decision on what happens upon submission is made
    });
});

module.exports = router;
