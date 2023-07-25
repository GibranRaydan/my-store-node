import express from 'express';
import { ProductService } from '../services/product.service.js';

const router = express.Router();
const service = new ProductService();


router.get('/', (req, res) => {
    const products = service.products;
    res.json(products);
})

router.get('/filter', (req, res) => {
    res.json({
        name: 'PlayStation',
        price: 1000
    });
})

/* router.get('/generate/:size', (req, res) => {
    const { size } = req.params;
    const products = service.products;
    res.json(products);
}) */

// query params
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = service.findOne(id);
    res.status(200).json(product);
})

router.post('/', (req, res) => {
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json(newProduct);
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const newProduct = service.update(id, body);
    res.status(200).json(newProduct);
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const newProduct = service.update(id, body);
    res.status(200).json(newProduct);
})


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const newProduct = service.delete(id);
    res.status(200).json(newProduct);
})

export { router };