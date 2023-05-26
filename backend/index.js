const express = require('express')
const app = express()
const outfitRouter = require('./src/routes/Outfit') 

app.use('/outfits', outfitRouter)

app.get('/powitansko', (req, res) => {
    res.send("Witaj kochanie")
})

app.listen(3000, () => console.log('Nasluchiwanie na porcie'))