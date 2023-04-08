const isLogged = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	return res.status(401).send("NOT AUTHORIZED");
};

module.exports = { isLogged };
