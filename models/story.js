const { DateTime } = require('luxon');
const { v4: uuidv4 } = require('uuid');

const stories = [
	{
		id: '1',
		title: 'A funny story',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a viverra orci.',
		author: 'Brandon',
		createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
	},

	{
		id: '2',
		title: 'It is raining',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a viverra orci.',
		author: 'Michael',
		createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
	},
];

exports.find = () => {
	return stories;
};

exports.findById = (id) => {
	return stories.find((story) => story.id === id);
};

exports.save = (story) => {
	story.id = uuidv4();
	story.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
	stories.push(story);
};

exports.updateById = (id, newStory) => {
	let story = stories.find((story) => story.id === id);
	if (story) {
		story.title = newStory.title;
		story.content = newStory.content;
		return true;
	} else {
		return false;
	}
};
