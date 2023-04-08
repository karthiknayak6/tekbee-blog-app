const User = require("../models/user");

const register = async (req, res) => {
	try {
		console.log(req.body);
		const { username, email, password } = req.body.thisUser;
		const user = new User({ email, username });
		const registeredUser = await User.register(user, password);
		req.login(registeredUser, (err) => {
			if (err) return next(err);
			console.log("Registered successfully");
			res.send("Registered successfully");
		});
	} catch (e) {
		console.log("error " + e);
	}
};

const login = async (req, res) => {
	try {
		console.log(req.user);
		res.send("Logged in successfully " + req.user);
	} catch (e) {
		console.log(e);
	}
};

const logout = async (req, res) => {
	try {
		req.logout(() => {
			console.log("logged out");
			res.send("logged out");
		});
	} catch (e) {
		console.log("Cannot Log out ", e);
	}
};

const home = async (req, res) => {
	console.log("User is currently logged in: " + req.user);
	res.send("User is currently logged in: " + req.user);
};

const loginStatus = async (req, res) => {
	console.log(req.isAuthenticated());
	res.send(req.isAuthenticated());
};

module.exports = { register, login, logout, loginStatus, home };
