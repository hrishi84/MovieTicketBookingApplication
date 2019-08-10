const mongoose = require('mongoose')

const show = new mongoose.Schema({
    theatreName:{
        type : String
    },
    movieName:String,
    dateTime: Date,
    screen: Number,
    availableSeats: Number
   
})

const Show = mongoose.model('shows',show);

module.exports = Show