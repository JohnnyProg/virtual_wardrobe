const express = require('express')
router = express.Router()
const authenticate = require('./../middlewares/AuthorizationJWT')

//return list of outfits, may send filters as Object {name: value} like json, send to controllers to validate and then to services to make request
router.get('/', authenticate, (req, res) => {
    filters = req.query
    console.log(filters)
    console.log(typeof(filters))
    res.send("działa git")
})

router.post('/', authenticate, (req, res) => {
    
})

module.exports = router