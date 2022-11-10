let express = require("express");
let router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send(req.params);
});
router.post("/", (req, res, next) => {
  res.send(req.body);
});
module.exports = router;
