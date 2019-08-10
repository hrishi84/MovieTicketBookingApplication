const express = require('express')
const mongodb = require('mongodb')
const router = express.Router();

const ShowController = require('../../controller/showsController')

router.get('/', async (req,res)=> {
    const shows = await loadShowsCollection();
    
    res.send(await shows.find({}).toArray());
})

router.post('/', ShowController.getShowFromMovie);

async function loadShowsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://hash:hash123@cluster0-jnvmf.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser : true});

    return client.db('MovieBookingApplication').collection('shows');
}

module.exports = router;