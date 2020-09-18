const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tutorSchema = new Schema({
    name: { type: String, unique: true },
    description: String,
    lessons: [{ subject: String, price: Number }]
})

module.exports = mongoose.model('Tutor', tutorSchema)