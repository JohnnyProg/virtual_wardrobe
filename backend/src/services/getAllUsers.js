const User = require('./../models/User')

module.exports = () => {
    const users = User.find({})
    return users
}