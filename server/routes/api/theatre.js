const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();
//get theatres
router.get('/',async (req,res)=>{
    const theatres = await loadTheatresCollection();

    res.send(await theatres.find({}).toArray());
})

//add theatres
router.post('/',async(req,res)=>{
    const theatres = await loadTheatresCollection();
    await theatres.insertOne({
        name : req.body.name,
        location: req.body.location,
        screens: req.body.screens,
        shows: req.body.shows
    })
    res.status(201).send();
})
//remove theatres
router.delete('/:id', async(req,res)=>{
    const theatres = await loadTheatresCollection();
    await theatres.deleteOne({ _id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadTheatresCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://hash:hash123@cluster0-jnvmf.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser : true});
    
    return client.db('MovieBookingApplication').collection('theatres');

}

module.exports = router;