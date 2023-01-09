require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const brandRoutes = require('./routes/brands');

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// app.use(brandRoutes)

//routes 
app.use('/api/brands', brandRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for req
        app.listen(process.env.PORT, () => (
            console.log('Welcome to SK server')
        ))
    })
    .catch((error) => {
        console.log(error)
    })

