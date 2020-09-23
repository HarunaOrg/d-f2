const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.port || 3000
const MONGODB_URI = 'mongodb+srv://nick:c0ldlampinwithFL4V4@cluster0.lwbmc.mongodb.net/movie-catalog?retryWrites=true&w=majority'

const movieRoutes = require('./routes/movieRoutes')

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/movies', movieRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log(`We are on port ${PORT}`)
        app.listen(PORT)
    })
    .catch(err => {
        console.log(err)
    })