const mongoose = require('mongoose')

const movie = new mongoose.Schema({
    title:{
        type : String,
        unique: true
    },
    releaseDate:Date,
    actors:[String],
    status: String,
    imdb:{
        rating: Number,
        votes: Number
    },
    language:[String]
})

const Movie = mongoose.model('movies',movie);

module.exports = Movie