const express = require("express");
const router = express.Router();
const pollQueries = require('../db/polls');

router.get("/", (req, res) => {
  return res.render("polls");
});

router.post("/:id", (req, res) => {
  const pollId = req.params.id;

  pollQueries.getPoolById(pollId)
    .then((poll) => {
      return res.render("pollSuccess"); // temporary page name until decision on what happens upon submission is made
    });
});

module.exports = router;