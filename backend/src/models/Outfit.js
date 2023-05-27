const mongoose = require('mongoose')
const categorySchema = require('./Category')

const outfitSchema = new mongoose.Schema({
    name: {type: String, required: true},
    warmth: {type: String, enum: ['warm', 'cold', 'middle'], required: false},
    ocasion: {type: String, enum: ['elegant', 'casual', 'sport'], required: false},
    calegory: [categorySchema]
})

module.exports = outfitSchema