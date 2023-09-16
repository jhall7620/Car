// Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// db connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err))

// 404 page
app.get('*', (req, res) => {
    res.send(404)
})

// Listen
app.listen(PORT, console.log(`listening on port ${PORT}`))