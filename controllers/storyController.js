//GET /stories : send all stories to the user
exports.index = (req, res) => {
	res.send('send all stories');
};

//GET /stories/new : send html form for creating a new story
exports.new = (req, res) => {
	res.send('send the new form');
};

//POST /stories : create a new story
exports.create = (req, res) => {
	res.send('Created a new story');
};

//GET /stories/:id : send details of story identified by id
exports.show = (req, res) => {
	res.send('send story with id' + req.params.id);
};

//GET /stories/:id/edit : send html form for editing an existing story
exports.edit = (req, res) => {
	res.send('send the edit form');
};

//PUT /stories/:id : update the story identified by id
exports.update = (req, res) => {
	res.send('update story with id' + req.params.id);
};

//DELETE /stories/:id : elte the story identified by id
exports.delete = (req, res) => {
	res.send('delete story with id' + req.params.id);
};