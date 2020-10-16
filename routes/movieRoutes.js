const express = require('express');

const movieController = require('../controllers/movieController')

const router = express.Router();


// /movies => GET
router.get('/', movieController.getMovies)

// /movies/:movieId => GET
router.get('/:movieId', movieController.getMovie)

// /movies => POST
router.post('/', movieController.addMovie)

// /movies/:id => PUT
router.put('/:movieId', movieController.updateMovie)

module.exports = router;