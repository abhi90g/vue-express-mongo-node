const mongoose = require('mongoose')
const { Schema } = mongoose

const actionSchema = new Schema({
    dish: String,
    station: String,
    duration: Number,
    startTime: String,
    action: String
})

mongoose.model('actions', actionSchema)