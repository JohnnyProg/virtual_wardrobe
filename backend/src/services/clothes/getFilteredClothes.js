const User = require('./../../models/User')

const getFilteredClothes = async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.user })

        if (!user) {
            //nie ma użytkownika :#
            res.sendStatus(303)
        }
        //zamiana ObjectID na dokument
        await user.populate('clothes')
        let clothes = user.clothes
        //clothes to są wszystkie ubrania jakie mamy
        //filtering
        if(req.body.name) {
            const name = req.body.name
            clothes = clothes.filter(obj => obj.name === name)
        }

        if(req.body.colorType) {
            const colorType = req.body.colorType
            clothes = clothes.filter(obj => obj.colorType === colorType)
        }

        if(req.body.ocasion) {
            const ocasion = req.body.ocasion
            clothes = clothes.filter(obj => obj.ocasion === ocasion)
        }

        console.log(typeof(clothes))
        console.log(JSON.stringify(clothes))
        res.json(clothes)
        // res.json(JSON.stringify(clothes))
        
    }catch(error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
}

module.exports = getFilteredClothes