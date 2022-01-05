const PostModel = require("../models/post.model");
const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.readPost = (req, res) => {
	PostModel.find((err, data) => {
		if (!err) res.send(data);
		else console.log("Error to get data : " + err);
	});
};

module.exports.createPost = async (req, res) => {
	const newPost = new PostModel({
		posterId: req.body.posterId,
		message: req.body.message,
		video: req.body.video,
		likers: [],
		comments: [],
	});

	try {
		const post = await newPost.save();
		return res.status(201).json(post);
	} catch (err) {
		return res.status(400).send(err);
	}
};

module.exports.updatePost = (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	const updatedRecord = {
		message: req.body.message,
	};

	PostModel.findByIdAndUpdate(req.params.id, { $set: updatedRecord }, { new: true }, (err, data) => {
		if (!err) res.send(data);
		else console.log("Update err : " + err);
	});
};

module.exports.deletePost = (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	PostModel.findByIdAndRemove(req.params.id, (err, data) => {
		if (!err) res.send(data);
		else console.log("Delete err : " + err);
	});
};

module.exports.likePost = async (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	try {
		await PostModel.findByIdAndUpdate(
			req.params.id,
			{
				$addToSet: { likers: req.body.id },
			},
			{ new: true }
		)
			.then((data) => res.send(data))
			.catch((err) => res.status(500).send({ message: err }));
		await UserModel.findByIdAndUpdate(
			req.body.id,
			{
				$addToSet: { likes: req.params.id },
			},
			{ new: true }
		);
	} catch (err) {
		return res.status(400).send(err);
	}
};

module.exports.unlikePost = async (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	try {
		await PostModel.findByIdAndUpdate(
			req.params.id,
			{
				$pull: { likers: req.body.id },
			},
			{ new: true }
		)
			.then((data) => res.send(data))
			.catch((err) => res.status(500).send({ message: err }));
		await UserModel.findByIdAndUpdate(
			req.body.id,
			{
				$pull: { likes: req.params.id },
			},
			{ new: true }
		);
	} catch (err) {
		return res.status(400).send(err);
	}
};

module.exports.commentPost = (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	try {
		return PostModel.findByIdAndUpdate(
			req.params.id,
			{
				$push: {
					comments: {
						commenterId: req.body.commenterId,
						commenterPseudo: req.body.commenterPseudo,
						text: req.body.text,
						timestamp: new Date().getTime(),
					},
				},
			},
			{ new: true },
			(err, data) => {
				if (!err) return res.send(data);
				else return res.status(400).send(err);
			}
		);
	} catch (err) {
		return res.status(400).send(err);
	}
};

module.exports.editCommentPost = (req, res) => {};
module.exports.deleteCommentPost = (req, res) => {};
