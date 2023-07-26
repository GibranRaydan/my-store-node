import express from 'express';
import { ProductService } from '../services/product.service.js';
import { validatorHandler } from '../middlewares/validator.handler.js';
import { createProductSchema, updateProductSchema, getProductSchema } from '../schemas/product.schema.js';

const router = express.Router();
const service = new ProductService();


router.get('/', async (req, res) => {
    const products = await service.find();
    res.json(products);
})

router.get('/filter', (req, res) => {
    res.json({
        name: 'PlayStation',
        price: 1000
    });
})

// query params
router.get('/:id', 
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await service.findOne(id);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }

})

router.post('/',
    validatorHandler(createProductSchema, 'body'),
    async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
})

router.patch('/:id',
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const newProduct = await service.update(id, body);
        res.status(200).json(newProduct);

    } catch (error) {
        next(error);

    }

})

router.put('/:id',
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const newProduct = await service.update(id, body);
        res.status(200).json(newProduct);
    } catch (error) {
        next(error);
    }
})

router.delete('/:id',
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const newProduct = await service.delete(id);
            res.status(200).json(newProduct);
        } catch (error) {
            next(error);
        }
})

export { router };