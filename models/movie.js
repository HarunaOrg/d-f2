const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owned: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Movie', movieSchema)