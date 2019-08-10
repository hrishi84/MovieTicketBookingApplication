const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(bodyParser.json())
app.use(cors())

const movies = require('./routes/api/movie')
app.use('/api/movie',movies)
const theatres = require('./routes/api/theatre')
app.use('/api/theatres', theatres)
const bookings = require('./routes/api/bookings')
app.use('/api/bookings', bookings)
// const shows = require('./routes/api/shows')
// app.use('/api/bookings', shows)
const port = process.env.port || 5100;

app.listen(port,() => console.log('server started on port ',port))