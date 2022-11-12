let express = require("express");
let router = express.Router();
let mailer = require("../services/mailer");

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send(req.params);
});
router.post("/", (req, res, next) => {
  mailer(req.body.user, req.body.email);
  res.send(req.body);
});
module.exports = router;
