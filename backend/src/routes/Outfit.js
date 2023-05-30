const express = require('express')
router = express.Router()
const authenticate = require('./../middlewares/AuthorizationJWT')

//return list of outfits, may send filters as Object {name: value} like json, send to controllers to validate and then to services to make request

//add new outfit to loged user
router.get('/add',authenticate, (req, res) => {
})

//get one outfit by id
router.get('/:id', authenticate, (req, res) => {
})

//get Filtered outfits
router.post('/', authenticate, (req, res) => {
})

router.post('/edit', authenticate, (req, res) => {
    
})


module.exports = router