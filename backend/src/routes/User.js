const express = require('express')
router = express.Router()

const middleware = (req, res, next) => {
    next()
}

//get all users
router.get('/', (req, res) => {

})

//create new user (during registration)
router.post('/register', (req, res) => {

})

//get user from token (for showing profile)
router.get('/myProfile', middleware, (req, res) => {
    
})

