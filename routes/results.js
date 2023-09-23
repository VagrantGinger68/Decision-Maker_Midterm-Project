const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  // get results from database

  // sample data for html display
  const templateVars = {
    title: "Poll Title",
    question: "Question?",
    choices: ["Option3", "Option2", "Option1", "Option1"],
  };
  return res.render("results", templateVars);
});

module.exports = router;
