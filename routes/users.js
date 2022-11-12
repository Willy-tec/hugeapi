let express = require("express");
let router = express.Router();
let mailer = require("../services/mailer");
const db = require("../services/db");

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send(req.params);
});
router.post("/", async (req, res, next) => {
  mailer(req.body.user, req.body.email);
  console.log(db);
  db.connect();
  let result;
  await db.query("SELECT * FROM users", (err, rows, fields) => {
    if (err) throw err;

    console.log("The solution is: ", rows[0].email);
    result = rows[0].email;
  });
  db.end();
  res.send(result);
});
module.exports = router;
