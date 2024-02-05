const model = require('../models/story');

//GET /stories : send all stories to the user
exports.index = (req, res) => {
	let stories = model.find();
	res.render('./story/index', { stories });
};

//GET /stories/new : send html form for creating a new story
exports.new = (req, res) => {
	res.render('./story/new');
};

//POST /stories : create a new story
exports.create = (req, res) => {
	let story = req.body;
	model.save(story);
	res.redirect('./stories');
};

//GET /stories/:id : send details of story identified by id
exports.show = (req, res) => {
	let id = req.params.id;
	let story = model.findById(id);
	if (story) {
		res.render('./story/show', { story });
	}
	res.status(404).send('Cannot find story with id ' + id);
};

//GET /stories/:id/edit : send html form for editing an existing story
exports.edit = (req, res) => {
	let id = req.params.id;
	let story = model.findById(id);
	if (story) {
		res.render('./story/edit', { story });
	} else {
		res.status(404).send('Cannot find story with id ' + id);
	}
};

//PUT /stories/:id : update the story identified by id
exports.update = (req, res) => {
	let story = req.body;
	let id = req.params.id;

	if (model.updateById(id, story)) {
		res.redirect('/stories/' + id);
	} else {
		res.status(404).send('Cannot find story with id ' + id);
	}
};

//DELETE /stories/:id : elte the story identified by id
exports.delete = (req, res) => {
	res.send('delete story with id' + req.params.id);
};
