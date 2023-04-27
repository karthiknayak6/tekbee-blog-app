const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../models/user");
const router = express.Router();
const posts = require("../controllers/post");
const user = require("../models/user");
const session = require("express-session");
const { isLogged } = require("../middlewares/auth_middleware");

const jsonParser = bodyParser.json();

router.route("/new").post(jsonParser, isLogged, posts.createPost);

module.exports = router;
