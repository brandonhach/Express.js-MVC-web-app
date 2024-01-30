const { DateTime } = require('luxon');

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
