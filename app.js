const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const passport = require("passport");
const MagicLinkStrat = require("passport-magic-link").Strategy;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const db = require("./services/db");
const app = express();

db.query("SELECT * FROM users AS user", (err, rows, fields) => {
  if (err) throw err;

  console.log("The solution is: ", rows[0].user);
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
