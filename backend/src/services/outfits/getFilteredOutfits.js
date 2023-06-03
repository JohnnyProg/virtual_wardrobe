const User = require('./../../models/User')

const getFilteredOutfitss = async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.user })

        if (!user) {
            //nie ma użytkownika :#
            res.sendStatus(303)
        }
        await user.populate({path: 'outfits', populate: 'clothes'})
        console.log(user.outfits.clothes)
        //zamiana ObjectID na dokument
        let outfits = user.outfits
        // outfits.populate('clothes')
        //outfits to są wszystkie ubrania jakie mamy
        //filtering
        // if(req.body.name) {
        //     const name = req.body.name
        //     outfits = outfits.filter(obj => obj.name === name)
        // }

        // if(req.body.colorType.length) {
        //     const colorType = req.body.colorType
        //     console.log(colorType)
        //     outfits = outfits.filter(obj => colorType.includes(obj.colorType))
        // }

        // if(req.body.ocasion.length) {
        //     const ocasion = req.body.ocasion
        //     console.log(ocasion)
        //     outfits = outfits.filter(obj => ocasion.includes(obj.ocasion))
        // }

        // console.log(typeof(outfits))
        // console.log(JSON.stringify(outfits))
        res.json(outfits)
        // res.json(JSON.stringify(outfits))
        
    }catch(error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
}

module.exports = getFilteredOutfitss