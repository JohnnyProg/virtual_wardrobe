const express = require('express')
const app = express()
const outfitRouter = require('./src/routes/Outfit') 
const userRouter = require('./src/routes/User')
const connectDB = require('./src/configs/configDB')

connectDB()

app.use('/outfits', outfitRouter)
app.use('/user', userRouter)

app.get('/powitansko', (req, res) => {
    res.send("Witaj kochanie")
})

app.listen(3000, () => console.log('Nasluchiwanie na porcie'))