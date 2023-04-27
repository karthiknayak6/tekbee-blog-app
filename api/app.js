const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { isLogged } = require("./middlewares/auth_middleware");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const bodyParser = require("body-parser");
console.log("test");

const jsonParser = bodyParser.json();

const cors = require("cors");

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
		credentials: true,
	})
);
// app.use((req, res, next) => {
// 	res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
// 	res.header(
// 		"Access-Control-Allow-Headers",
// 		"Origin, X-Requested-With, Content-Type, Accept"
// 	);
// 	res.header("Access-Control-Allow-Credentials", true);
// 	next();
// });

const User = require("./models/user");

app.use(express.json());

const sessionConfig = {
	name: "session",
	secret: "secret",
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		// secure: true,
		expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
		maxAge: 1000 * 60 * 60 * 24 * 7,
	},
};
app.use(session(sessionConfig));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	try {
		req.user ? console.log(req.user) : console.log("Not logged in");
	} catch (e) {
		console.log(e);
	}
	next();
});

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/posts", postRoutes);
app.use("/", userRoutes);

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/tekbee", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Database connected");
});

app.listen(5000, () => {
	console.log("Server is running on port 5000");
});
