const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// const cors = require('cors');
// const path = require('path');
const brandRoutes = require('./routes/brands');


//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes 
app.use('/api/brands', brandRoutes)

//connect to db
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

