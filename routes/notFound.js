const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.render("not_found");
});

module.exports = router;
