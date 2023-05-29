const express = require('express')
router = express.Router()
//services
const addClothesService = require('./../services/clothes/addClothes')
const getFilteredClothes = require('./../services/clothes/getFilteredClothes')
//middlewares
const authenticate = require('./../middlewares/AuthorizationJWT')

//add new cloth to loged user
router.post('/add',authenticate, (req, res) => {
    addClothesService(req, res)
})

//get Filtered Clothes
router.post('/', authenticate, (req, res) => {
    getFilteredClothes(req, res)
})

module.exports = router