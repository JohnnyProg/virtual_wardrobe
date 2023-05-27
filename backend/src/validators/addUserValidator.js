const joi = require('joi')
const passwordComplexity = require('joi-password-complexity')

const validate = (data) => {
    const schema = joi.object({
        firstName: joi.string().required().label("First Name"),
        lastName: joi.string().required().label("Last Name"),
        userName: joi.string().required().label("Username"),
        password: passwordComplexity().required().label("Password")
    })
    return schema.validate(data)
}

module.exports = validate