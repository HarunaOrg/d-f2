const express = require('express');

const movieController = require('../controllers/movieController')

const router = express.Router();

// /movies => GET
router.get('/', movieController.getMovies)

// /movies => POST
router.post('/', movieController.addMovie)

module.exports = router;