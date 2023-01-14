const express = require('express');
const Brand = require("../models/brandModel")
const { getBrand, getBrands } = require('../controllers/brandController')

const router = express.Router()

router.get('/', getBrands)




router.get('/:id', getBrand)

router.post('/', async (req, res) => {
    const { client, campaign, live } = req.body
    try {
        const brand = await Brand.create({ client, campaign, live })
        res.status(200).json(brand)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router