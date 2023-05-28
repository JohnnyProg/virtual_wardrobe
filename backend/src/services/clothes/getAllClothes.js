const getAllClothes = (req, res) => {
    try {
        let user = User.findOne({ _id: req.user })

        if (!user) {
            //nie ma użytkownika :#
            res.sendStatus(303)
        }
        //zamiana ObjectID na dokument
        user.populate('clothes')
        const clothes = user.clothes

        res.status(200).send(clothes)
    }catch(error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
}