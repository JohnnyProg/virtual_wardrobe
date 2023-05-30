const User = require('./../../models/User')
const Clothes = require('./../../models/Clothes')
const getFilteredClothes = async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.user })

        if (!user) {
            //nie ma użytkownika :#
            res.sendStatus(303)
        }
        //zamiana ObjectID na dokument

        const clothes = await Clothes.findOne({_id : req.params.id})

        // console.log(typeof(clothes))
        // console.log(JSON.stringify(clothes))
        res.json(clothes)
        // res.json(JSON.stringify(clothes))
        
    }catch(error) {
        (error)
        res.status(500).send("Internal server error")
    }
}

module.exports = getFilteredClothes