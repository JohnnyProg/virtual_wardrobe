const express = require('express')
router = express.Router()
//services
const addClothesService = require('./../services/clothes/addClothes')
const getFilteredClothes = require('./../services/clothes/getFilteredClothes')
const getClothesById = require('./../services/clothes/getClothesById')
//middlewares
const authenticate = require('./../middlewares/AuthorizationJWT')

//add new cloth to loged user
router.get('/add',authenticate, (req, res) => {
    addClothesService(req, res)
})

router.get('/:id', authenticate, (req, res) => {
    getClothesById(req, res)
})

//get Filtered Clothes
router.post('/', authenticate, (req, res) => {
    getFilteredClothes(req, res)
})

module.exports = router