const Clothes = require('./../../models/Clothes')
const User = require('./../../models/User')
const validate = require('./../../validators/addClothesValidator')

const updateClothes = async(req, res) => {
    try {
        const { error } = validate(req.body)

        let user = await User.findOne({ _id: req.user })

        if (!user) {
            //nie ma użytkownika :#
            res.sendStatus(303)
        }
        
        await Clothes.findByIdAndUpdate(req.body._id, {...req.body})
        console.log(req.body)
        // console.log(clothes)
        // console.log(user)
        // console.log(user.clothes)
        // await user.clothes.push(clothes)
        // await user.save()
        res.send("udało się dodać")
    } catch(error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
}

module.exports = updateClothes