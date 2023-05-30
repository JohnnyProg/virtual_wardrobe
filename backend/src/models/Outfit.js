const mongoose = require('mongoose')
const categorySchema = require('./Category')
const Clothes = require('./Clothes')

const outfitSchema = new mongoose.Schema({
    name: {type: String, required: true},
    warmth: {type: String, enum: ['warm', 'cold', 'middle'], required: false},
    ocasion: {type: String, enum: ['elegant', 'casual', 'sport'], required: false},
    clothes: [{
        type: mongoose.Schema.ObjectId,
        require: false,
        ref: Clothes,
        requred: false
    }]
    // calegory: [categorySchema]
})

module.exports = outfitSchema