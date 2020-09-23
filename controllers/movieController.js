const Movie = require('../models/movie');

exports.getMovies = (req, res, next) => {
    Movie.find()
        .then(movies => res.json(movies))
}

exports.addMovie = (req, res, next) => {
    const name = req.body.name;
    const owned = req.body.owned;
    const movie = new Movie({
        name: name,
        owned: owned
    })
    movie.save()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}