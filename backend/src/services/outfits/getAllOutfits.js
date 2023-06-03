const getAllOutfits = (req, res) => {
    try {
        let user = User.findOne({ _id: req.user })

        if (!user) {
            //nie ma użytkownika :#
            res.sendStatus(303)
        }
        //zamiana ObjectID na dokument
        
        const outfits = user.outfits

        res.status(200).send(outfits)
    }catch(error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
}