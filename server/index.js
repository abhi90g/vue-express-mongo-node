const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const keys = require('./config/keys')
require('./models/action')

mongoose.connect(keys.mongoURI)

const app = express()

// middleware
app.use(bodyParser.json())
app.use(cors())

require('./routes/actionRoutes')(app)

// handle routes in production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const PORT = process.env.PORT || 5000
app.listen(PORT)