const router = require('express').Router()
const Car = require('../models/car')

// GET car by make
router.get('/make/:make', (req, res) => {
    const {make} = req.params
    const car = Car.find(c => c.make === make)
    res.send(car)
})

// POST create new car
router.post('/', async (req, res) => {
    await Car.create(req.body)
    //res.redirect('/breads')
})

module.exports = router 