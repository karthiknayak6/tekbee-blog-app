const User = require("../models/user");
const Post = require("../models/post");
const createPost = async (req, res) => {
	const post = new Post(req.body);
	post.author = req.user.username;
	await post.save();
	console.log("DONE");

	console.log(req.body);
	res.send(req.body);
};
module.exports = { createPost };
