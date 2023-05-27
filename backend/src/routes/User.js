const express = require('express')
router = express.Router()
const getAllUsersService = require('./../services/getAllUsers')
const addUserService = require('./../services/addUser')

//get all users
router.get('/', async (req, res) => {
    users = await getAllUsersService()
    console.log(users)
    res.send("ok")
})

//create new user (during registration)
router.get('/register', async (req, res) => {
    await addUserService(req, res)
})

//get user from token (for showing profile)
router.get('/myProfile', (req, res) => {
    
})

module.exports = router