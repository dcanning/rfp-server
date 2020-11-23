const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is the user api");
});

module.exports = router;
