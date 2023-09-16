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
    Color: {
        type: String
    },
    Mileage: {
        type: Number
    },
    Image: {
        type: String,
        default: 'https://www.kimballstock.com/images/car-stock-photos/cutout-car-images.jpg'
    }
})