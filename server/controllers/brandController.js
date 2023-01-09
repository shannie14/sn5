const Brand = require('../models/brandModel')

//get single brand
const getBrand = async (req, res) => {
    const { id } = req.params

    const brand = await Brand.findById(id)

    if (!brand) {
        return res.status(404).json({ error: 'Brand not found' })
    }
    res.status(200).json(brand)
}

//get all brands
const getBrands = async (req, res) => {
    const brands = await Brand.find({}).sort()
}

module.exports = {
    getBrand,
    getBrands
}