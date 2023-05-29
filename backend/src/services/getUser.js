const User = require('./../models/User')

module.exports = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user}).populate('clothes')
        if(!user) {
            res.status(400).send("user not found")
        }
        console.log("uzytkownik znaleziony")
        console.log(user)
        res.json(user)
    }catch (error) {
        console.log(error)
    }
}