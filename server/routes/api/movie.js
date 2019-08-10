const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();

//Get movies 
router.get('/', async (req,res)=> {
    const movies = await loadMoviesCollection();
    
    res.send(await movies.find({}).toArray());
})
//add movies
router.post('/', async (req, res) => {
    const movies = await loadMoviesCollection();
    await movies.insertOne({
        title: req.body.title,
        releaseDate: req.body.releaseDate,
        actors: req.body.actors,
        director: req.body.director,
        imdb: req.body.imdb,
        language: req.body.language
    });
    res.status(201).send();
});
//remove movies
router.delete('/:id', async(req,res)=>{
    const movies = await loadMoviesCollection();
    await movies.deleteOne({ _id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadMoviesCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://hash:hash123@cluster0-jnvmf.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser : true});

    return client.db('MovieBookingApplication').collection('movies');
}

module.exports = router;