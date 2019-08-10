const Movie = require('../models/movies')
const Theatre = require('../models/theatres')
const Show = require('../models/shows')
const Booking = require('../models/bookings')

module.exports={
    async showBookings(req,res){
        try{
            const booking = await Booking.findOne({
                userName: req.params.userName
            })
            res.send({
                booking:booking
            })
        }catch(err){
            res.status(404).send({
                err: "No Bookings found for the user"
            })
        }
    },
    async createBooking(req,res){
        try{
            var show = await Show.findOne({
                show:req.body.show
            })
            if(show.availableSeats >req.body.seats){
                show.update(
                    {_id:show.id},
                  {  $inc: { availableSeats: -req.body.seats }}
                )
                const booking = await Booking.create(req.body)
                res.send({
                    booking:booking
                })
            }
        }catch(err){
            res.status(500).send({
                err: "failed to book ticket"
            })
        }
    }
}