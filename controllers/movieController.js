const Movie = require('../models/movie');

exports.getMovies = (req, res, next) => {
    Movie.find()
        .then(movies => res.json(movies))
}

exports.getMovie = (req, res, next) => {
    const movieId = req.params.movieId;
    Movie.findById(movieId)
      .then(movie => {
         res.status(200).json(movie)
      })
      .catch(err => {
        res.status(500)
        console.log(err)
      })
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
    movie.save()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}

exports.updateMovie = (req, res, next) => {
    const movieId = req.params.movieId
    const title = req.body.title
    const director = req.body.director
    const owned = req.body.owned
    const dates = req.body.dates
    const yearReleased = req.body.yearReleased
    const reelGood = req.body.reelGood
    Movie.findById(movieId)
        .then(movie => {
            movie.title = title
            movie.director = director
            movie.owned = owned
            movie.dates = dates
            movie.yearReleased = yearReleased
            movie.reelGood = reelGood
            return movie.save()
        })
        .then(movie => {       
            res.status(200).json(movie)
          })
          .catch(err => {
            console.log(err)
          })
}