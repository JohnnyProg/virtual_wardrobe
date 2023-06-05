const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['token']
    // console.log(req.headers)
    const token = authHeader && authHeader.split(' ')[1]
    // console.log(authHeader)
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, 'abcdefg', (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user
        console.log("autoryzacja udana")
        next()
    })
}

module.exports = authenticateToken