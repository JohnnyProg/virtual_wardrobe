const Clothes = require('./../../models/Clothes')
const User = require('./../../models/User')
const validate = require('./../../validators/addClothesValidator')


const addClothes = (req, res) => {
    try {
        const { error } = validate(req.body)

        let user = User.findOne({ _id: req.user })

        if (!user) {
            //nie ma użytkownika :#
            res.sendStatus(303)
        }

        let clothes = new Clothes(...req.body)
        clothes.save()
        user.clothes.push(clothes).save()
    } catch(error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
}

module.exports = addClothes