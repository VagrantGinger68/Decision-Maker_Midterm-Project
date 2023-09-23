const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const email = req.body.email;
  const templateVars = {email : email};

  res.render("poll_submitted", templateVars);
});

module.exports = router;
