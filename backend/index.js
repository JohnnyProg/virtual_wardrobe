const express = require('express')
const app = express()

app.get('/powitansko', (req, res) => {
    res.send("Witaj kochanie")
})

app.listen(3000, () => console.log('Nasluchiwanie na porcie'))