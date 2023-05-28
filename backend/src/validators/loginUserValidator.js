const joi = require('joi')

const validate = (data) => {
    const schema = joi.object({
        userName: joi.string().required().label("Username"),
        password: joi.string().required().label("Password"),
        })
    return schema.validate(data)
}

module.exports = validate