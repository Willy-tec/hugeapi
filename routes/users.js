const express = require("express");
const router = express.Router();
const mailer = require("../services/mailer");
const db = require("../services/db");

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send(req.params);
});
router.post("/", (req, res, next) => {
  mailer(req.body.user, req.body.email);
  db.insertUser({
    user : req.body.user,
    email: req.body.email,
    password: req.body.password
  })
  res.send(req.body);
});
module.exports = router;
