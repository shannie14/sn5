const mongoose = require('mongoose')

const Schema = mongoose.Schema

const brandSchema = new Schema({
    client: {
        type: String,
    },
    campaign: {
        type: String,
    },
    live: {
        type: String,
    },
    imp_min: {
        type: String,
    },
    view_min: {
        type: String,
    },
    imp_total: {
        type: String,
    },
    view_total: {
        type: String,
    },
    imp_g: {
        type: String,
    },
    view_g: {
        type: String,
    },
    imp_meta: {
        type: String,
    },
    view_meta: {
        type: String,
    },
    signup: {
        type: String,
    },

})

module.exports = mongoose.model('Brand', brandSchema)
