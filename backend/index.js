const express = require('express')
const app = express()
const cors = require('cors')
//routers
const outfitRouter = require('./src/routes/Outfit') 
const userRouter = require('./src/routes/User')
const clothesRouter = require('./src/routes/Clothes')
const connectDB = require('./src/configs/configDB')

connectDB()
app.use(cors())
app.use(express.json())

app.use('/outfits', outfitRouter)
app.use('/user', userRouter)
app.use('/clothes', clothesRouter)

app.get('/powitansko', (req, res) => {
    res.send("Witaj kochanie")
})

app.listen(8080, () => console.log('Nasluchiwanie na porcie', 8080))