const express = require('express')
router = express.Router()
//services
const getAllUsersService = require('./../services/getAllUsers')
const addUserService = require('./../services/addUser')
const loginUserService = require('./../services/loginUser')
const getUser = require('./../services/getUser')
//middlewares
const authenticate = require('./../middlewares/AuthorizationJWT')

//get all users
router.get('/', async (req, res) => {
    users = await getAllUsersService()
    console.log(users)
    res.json(users)
})

//create new user (during registration)
router.post('/register', async (req, res) => {
    await addUserService(req, res)
})

router.post('/login', async (req, res) => {
    console.log("login")
    await loginUserService(req, res)
})

//get user from token (for showing profile)
router.post('/myProfile', authenticate, (req, res) => {
    getUser(req, res)
})

//send request to this path to check if user can see forms and sites without special user data
router.get('/authenticate', authenticate, (req, res) => {
    res.sendStatus(200)
})

module.exports = router