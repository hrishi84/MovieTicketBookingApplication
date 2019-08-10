const express = require('express')
const mongodb = require('mongodb')
var movies = require('./movie')
var theatres = require('./theatre')
var shows = require('./shows')
const router = express.Router();

//get bookings
router.get('/', async (req,res)=>{
    const bookings = await loadBookingsCollection();

    res.send(await bookings.find({}).toArray());
})
//create booking
router.post('/', async (req, res)=>{
    const bookings = await loadBookingsCollection();
    const shows = await loadShowsCollection();

    await theatre.update(
        {
            name : req.body.theatre.name,        
        },
        {
            $inc: { quantity: -req.body.theatre.seats.no} 
        }
    )
   
    await bookings.insertOne({
        userName : req.body.userName,
        movieName: req.body.movieName,
        theatre : req.body.theatre
    })

    res.status(201).send();

})

//cancel booking

async function loadBookingsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://hash:hash123@cluster0-jnvmf.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser : true});

    return client.db('MovieBookingApplication').collection('bookings');   
}

module.exports = router;