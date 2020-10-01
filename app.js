const path = require('path');
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080

const movieRoutes = require('./routes/movieRoutes')

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/movies', movieRoutes)

//Dummy Test
app.get('/', (req, res, next) => {
    res.json({
        message: "message"
    })
})

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(PORT, console.log(`Server is running on port ${PORT}`))
    })
    .catch(err => {
        console.log(err)
    })
