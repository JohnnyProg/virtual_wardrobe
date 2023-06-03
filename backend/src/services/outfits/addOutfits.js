const Clothes = require('./../../models/Clothes')
const Outfit = require('./../../models/Outfit')
const User = require('./../../models/User')
const validate = require('./../../validators/addOutfitValidator')


const addOutfits = async (req, res) => {
    try {
        const { error } = validate(req.body)
        
        if (error) {
            console.log(error.details[0].message)
            // return res.status(400).send({ message: error.details[0].message })
        }

        let user = await User.findOne({ _id: req.user })

        if (!user) {
            //nie ma użytkownika :#
            res.sendStatus(303)
        }
        console.log("outfit: ", req.body)
        await user.outfits.push(req.body)
        await user.save()
        res.send("udało się dodać")
    } catch(error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
}

module.exports = addOutfits