const User = require('./../models/User')
const bcrypt = require("bcrypt")
const validate = require('../validators/loginUserValidator')

const loginUser = async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message })
        const user = await User.findOne({ userName: req.body.userName })
        if (!user)
            return res.status(401).send({ message: "Invalid Email or Password" })
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        )
        if (!validPassword)
            return res.status(401).send({ message: "Invalid Email or Password" })
        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: "logged in successfully" })
        console.log('asfd')
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal Server Error" })
    }
}

module.exports = loginUser