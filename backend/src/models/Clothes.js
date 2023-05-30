const mongoose = require('mongoose')
const categorySchema = require('./Category')

const clothesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    note : {type: String, required: false},
    colorType: {type: String, enum: ['dark', 'bright', 'colorful', ""], required: false},
    // material: {type: String, enum: ['cotton', 'wool', 'leather', 'synthetic'], required: false},
    // warmth: {type: String, enum: ['warm', 'cold', 'middle'], required: false},
    ocasion: {type: String, enum: ['elegant', 'casual', 'sport', ""], required: false},
    // category: [categorySchema]
})

const Clothes = mongoose.model('Clothes', clothesSchema)

module.exports = Clothes