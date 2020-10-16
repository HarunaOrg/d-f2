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
    reelGood: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Movie', movieSchema)