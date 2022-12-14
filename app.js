const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const passport = require("passport");
const MagicLinkStrat = require("passport-magic-link").Strategy;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const databaseRouter = require("./routes/database");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/database", databaseRouter);

module.exports = app;
