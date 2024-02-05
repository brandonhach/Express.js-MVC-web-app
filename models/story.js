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
	{
		id: '3',
		title: 'Learning NBAD',
		content:
			'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.',
		author: 'Brandon Hach',
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

exports.deleteById = (id) => {
	let index = stories.findIndex((story) => story.id === id);
	if (index !== -1) {
		stories.splice(index, 1);
		return true;
	} else {
		return false;
	}
};
