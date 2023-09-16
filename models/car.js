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
    VIN: {
        type: Number
    },
    Mileage: {
        type: Number
    }
})