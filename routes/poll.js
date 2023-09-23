const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  return res.send(`Result link and poll link have been emailed to ${req.body.email}`);
});

module.exports = router;
