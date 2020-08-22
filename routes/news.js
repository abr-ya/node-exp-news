const express = require('express');
const router = express.Router();

const News = require('../models/News');

// POST - Save
router.post('/save', (req, res) => {
	const newNews = new News({
		headline: req.body.subject,
		description: req.body.description,
		department: req.body.department,
		imageUrl: req.body.imageUrl,
	});
	newNews.save()
		.then(news => res.json(news))
		.catch(err => res.json(err));
});

// GET All News
router.get('/', (req, res) => {
	News.find()
		.then(news => res.json(news))
		.catch(err => res.status(404).json(err));
});

// Get news by ID
router.get('/:id', (req, res) => {
	News.findById(req.params.id)
		.then(news => res.json(news))
		.catch(err => res.status(404).json(err));
});

// Post (Get) news by dept
router.post('/get-by-dept', (req, res) => {
	var dept = req.body.department;
	News.find({department: dept})
		.then(news => res.json(news))
		.catch(err => res.status(404).json(err));
});

// Edit News

// GET Test
router.get('/get', (req, res) => {
	res.send('hello!');
});

module.exports = router;
