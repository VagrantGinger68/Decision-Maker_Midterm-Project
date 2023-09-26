const express = require("express");
const router = express.Router();
const { getResultsById } = require("../db/queries/results");
const { getPollById, getChoicesByPoll } = require("../db/queries/polls");
const { generateResults, rankChoices } = require("../public/scripts/helpers");

router.get("/:id", (req, res) => {
  const { id } = req.params;

  // get results from database
  const pollsPromise = getPollById(id);
  const choicesPromise = getChoicesByPoll(id);
  const resultsPromise = getResultsById(id).then(generateResults);
  Promise.all([pollsPromise, choicesPromise, resultsPromise]).then(
    ([poll, choices, results]) => {
      if (!poll) return res.redirect("/notFound");

      const rankedChoices = results
        ? rankChoices(choices, results).map((choice) => choice.title)
        : [];
      const templateVars = {
        title: poll.title,
        question: poll.question,
        choices: rankedChoices,
      };
      return res.render("results", templateVars);
    }
  );
});

module.exports = router;
