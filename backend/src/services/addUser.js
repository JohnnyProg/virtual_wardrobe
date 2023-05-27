const validate = require('../validators/addUserValidator')
const User = require('./../models/User')
const bcrypt = require('bcrypt')
const addUser = async (req, res) => {
    try {
        // res.send("test123")
        console.log("asdasd")
        const { error } = validate(req.body)
        console.log("test123")
        if (error) {
            return res.status(400).send({ message: error.details[0].message })
        }

        const user = await User.findOne({ userName: req.body.userName })
        if (user) {
            return res.status(409).send({ message: "user with given username already exist!!" })
        }
        const salt = await bcrypt.getSalt(Number("10"))
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        user = new User({ ...req.body, password: hashPassword })
        await user.save()
        res.statis(201).send({ message: "User created succesfully" })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "internal erro" })
    }
}

module.exports = addUser