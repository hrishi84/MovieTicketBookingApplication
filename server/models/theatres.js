const mongoose = require('mongoose')

const theatre = new mongoose.Schema({
    name:{
        type : String,
        unique: true
    },
    location:{
        address:{
            street: String,
            city: String,
            state: String,
            pincode: String
        },
        geolocation:[Number]
    },
    screems:[{
        type: String,
        capacity: Number
    }]
    
})

const Theatre = mongoose.model('theatres',theatre);

module.exports = Theatre