import Joi from "joi";

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(20);
const price = Joi.number().integer().min(1);
const image = Joi.string(); //.uri()

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    image: image
})

const updateProductSchema = Joi.object({
    name: name,
    price: price,
    image: image
})

const getProductSchema = Joi.object({
    id: id.required(),
})

export {createProductSchema, updateProductSchema, getProductSchema}