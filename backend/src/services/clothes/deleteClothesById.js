const Clothes = require('./../../models/Clothes')
const User = require('./../../models/User')

const deleteClothes =  async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.user })

        if (!user) {
            //nie ma użytkownika :#
            res.sendStatus(303)
        }
        console.log("user rozpoznany")
        await Clothes.deleteOne({ _id: req.body.id });
        await user.clothes.pull(req.body.id)
        await user.save()
        res.status(200).send("udało się usunąć")
    } catch(error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
}

module.exports = deleteClothes