const Movie = require('../models/movies')

module.exports = {
    async addMovie (req,res){
        try{
            const movie = await Movie.create(req.body)
            req.send({
                movie: movie
            })
        }catch(err){
            res.status(500).send({
                err: "failed to add movie"
            })
        }
    },

    async getMovie(req,res){
        try{
            const movie = await Movie.findOne({
                title:req.params.title
            })
            res.send({
                movie:movie
            })
        }
    }
}