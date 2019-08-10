const Movie = require('../models/movies')
const Shows = require('../models/shows')

module.exports = {
    async addShow (req,res){
        try{
            const show = await Shows.create(req.body)
            req.send({
                show:show
            })
        }catch(err){
            res.status(500).send({
                err: "failed to add show"
            })
        }
    },

    async getShowFromMovie(req,res){
        try{
            const show = await Show.findOne({
                movie: req.body.movieName
            })
            res.send({
                show:show
            })
        }catch(err){
            res.status(404).send({
                err: "No shows found"
            })
        }
    }
}