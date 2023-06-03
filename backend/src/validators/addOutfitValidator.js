const joi = require('joi')

const validate = (data) => {
    const schema = joi.object({
        name: joi.string().required().label("Name"),
        // imageUrl: joi.string().uri().label('ImageURL'),
        clothes: joi.array().required()
    })
    return schema.validate(data)
}

module.exports = validate