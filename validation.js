//VALIDATION
const Joi = require('@hapi/joi'); 



//register validation
// we need to vaildate the input data of user information
const registerValidation = data => {

    const schema = Joi.object({
        name:Joi.string().
        min(6).
        required(),
        email:Joi.string().
        min(6).
        required().
        email(),
        password: Joi.string().
        min(8).
        required()
    });
        return schema.validate(data); //joi.validate (data,schema) doesnot work for newer version of joi 
};
// we need to validate email and password of the user
const loginValidation = data => {
    const schema = Joi.object({
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(8).required()
    });

    return schema.validate(data);
};


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

