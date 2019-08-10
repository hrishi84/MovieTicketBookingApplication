const mongoose = require('mongoose')

const booking = new mongoose.Schema({
    userName:{
        type : String
    },
    movieName:String,
    theatre:{
        name: String,
        screen: Number,
        seats:{
            no: Number,
            ids: [String]
        }
    }
})

const Booking = mongoose.model('bookings',booking);

module.exports = Booking