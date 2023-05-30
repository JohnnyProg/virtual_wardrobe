const express = require('express')
router = express.Router()
//services
const addClothesService = require('./../services/clothes/addClothes')
const getFilteredClothesService = require('./../services/clothes/getFilteredClothes')
const getClothesByIdService = require('./../services/clothes/getClothesById')
const deleteClothesByIdService = require('./../services/clothes/deleteClothesById')
const updateClothesByIdService = require('./../services/clothes/updateClothesById')
//middlewares
const authenticate = require('./../middlewares/AuthorizationJWT')

//add new cloth to loged user
router.post('/add',authenticate, (req, res) => {
    addClothesService(req, res)
})

//get one cloth by id
router.get('/:id', authenticate, (req, res) => {
    getClothesByIdService(req, res)
})

//get Filtered Clothes
router.post('/', authenticate, (req, res) => {
    getFilteredClothesService(req, res)
})

router.delete('/', authenticate, (req, res) => {
    deleteClothesByIdService(req, res)
})

router.post('/edit', authenticate, (req, res) => {
    updateClothesByIdService(req, res)
})

module.exports = router