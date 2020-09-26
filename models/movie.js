const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    owned: {
        type: Boolean,
        required: true
    },
    dates: [
        { type: Date }
    ],
    yearReleased: {
        type: Number,
        required: true
    },
    imdb: {
        type: String,
        required: true
    },
    wiki: {
        type: String,
        required: true
    },
    rottentomatoes: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Movie', movieSchema)