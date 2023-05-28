const mongoose = require('mongoose')
const outfitSchema = require('./Outfit')
const Clothes = require('./Clothes')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    clothes: [{
        type: mongoose.Schema.ObjectId,
        require: false,
        ref: Clothes,
        requred: false
    }],
    outfits: [outfitSchema]
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, 'abcdefg', {
        expiresIn: "1d",
    })
    return token
}


const User = mongoose.model('User', userSchema)

module.exports = User