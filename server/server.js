const express = require('express');
const cors = require('cors');
// const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
// const mongodb = require('mongodb').MongoClient;


const brandEndpoints = require('./routes/brands');
const Brand = require('./models/brandModel')


//express app
const app = express()

//middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'client')));


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for req
        app.listen(process.env.PORT, () => (
            console.log('Welcome to SK server', process.env.PORT)
        ))
    })
    .catch((error) => {
        console.log(error)
    })

app.get('/', async (req, res) => {
    res.send("hello world")
})

//endpoints prefixed w /brands
app.use('/brands', brandEndpoints)
