const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    make: {
        type: String
    },
    model: {
        type: String
    },
    year: {
        type: Number
    },
    color: {
        type: String
    },
    mileage: {
        type: Number
    },
    image: {
        type: String,
        default: 'https://www.kimballstock.com/images/car-stock-photos/cutout-car-images.jpg'
    }
})

module.exports = mongoose.model('Car', carSchema)