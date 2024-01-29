const express = require('express');

const router = express.Router();

//GET /stories: send all stories to the user
router.get('/stories', (req, res) => {
	res.send('send all stories');
});

module.exports = router;
