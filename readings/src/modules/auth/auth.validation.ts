import { Joi } from "celebrate";

export const signupSchema = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        login: Joi.string().email(),
        password: Joi.string().required().min(6).max(6),
        phone: Joi.string().required().length(11)
    })   
}