const express = require("express");
const router = express.Router();
const pollQueries = require('../db/queries/polls');

router.get("/:id", (req, res) => {
  const pollId = req.params.id;

  // using database
  // pollQueries.getPollById(pollId)
  //   .then((poll) => {
  //     const templateVars = poll;
  //     return res.render("submission", templateVars);
  //   });

  // temporary data for testing
  const templateVars = {
    title: "Poll Title",
    question: "Question",
    choices: ["option 1", "option 2", "option 3", "option 4", "option 5"]
  };
  return res.render("submission", templateVars);
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