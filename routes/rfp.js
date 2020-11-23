const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is the rfp api");
});

module.exports = router;
