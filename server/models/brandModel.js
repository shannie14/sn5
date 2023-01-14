const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    client: {
        type: String,
    },
    campaign: {
        type: String,
    },
    live: {
        type: Date,
    },
    imp_min: {
        type: Number,
    },
    view_min: {
        type: Number,
    },
    imp_total: {
        type: Number,
    },
    view_total: {
        type: Number,
    },
    imp_g: {
        type: Number,
    },
    view_g: {
        type: Number,
    },
    imp_meta: {
        type: Number,
    },
    view_meta: {
        type: Number,
    },
    signup: {
        type: Number,
    },

})

BrandSchema.index({
    client: 'text',
    campaign: 'text',
    live: 'date',
    imp_min: 'number',
    view_min: 'number',
    imp_total: 'number',
    vuew_total: 'number',
    imp_gview_: 'number',
    imp_metaview_Meta: 'number',
    signup: 'number',
})

const Brand = mongoose.model('Brand', BrandSchema, 'brands');

module.exports = Brand;
