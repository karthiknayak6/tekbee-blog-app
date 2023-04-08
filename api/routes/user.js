const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../models/user");
const router = express.Router();
// const catchError = require("../util/catchError");
const users = require("../controllers/user");
const user = require("../models/user");
const session = require("express-session");

const jsonParser = bodyParser.json();

router.route("/").get(jsonParser, users.home);
router.route("/loginStatus").get(jsonParser, users.loginStatus);

router.route("/register").post(jsonParser, users.register);

router.route("/login").post(
	jsonParser,
	passport.authenticate("local", {
		successRedirect: "/",
	}),
	users.login
);

router.get("/logout", jsonParser, users.logout);
module.exports = router;
