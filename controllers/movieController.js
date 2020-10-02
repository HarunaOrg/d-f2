const Movie = require('../models/movie');

exports.getMovies = (req, res, next) => {
    Movie.find()
        .then(movies => res.json(movies))
}

exports.addMovie = (req, res, next) => {
    const title = req.body.title;
    const director = req.body.director;
    const owned = req.body.owned;
    const dates = req.body.dates;
    const imdb = req.body.imdb;
    const wiki = req.body.wiki;
    const rottentomatoes = req.body.rottentomatoes;
    const yearReleased = req.body.yearReleased;

    const movie = new Movie({
        title: title,
        director: director,
        owned: owned,
        dates: [...dates],
        imdb: imdb,
        wiki: wiki,
        rottentomatoes: rottentomatoes,
        yearReleased: yearReleased
    })
    console.log(movie)
    movie.save()
        .then(result => {
            console.log(movie)
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}