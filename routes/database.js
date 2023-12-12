const express = require("express");
const router = express.Router();
const db = require("../services/db");

router.get("/", async (req, res, next) => {
  const result = db.init(req, res);
});

module.exports = router;
