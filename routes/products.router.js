import express from 'express';
import { faker } from '@faker-js/faker';

const router = express.Router();

function generateProducts(size = 100) {
    const products = [];
    for (let index = 0; index < size; index++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price()),
            image: faker.image.url()
        })        
    }
    return products;
}

router.get('/', (req, res) => {
    const products = generateProducts();
    res.json(products);
})

router.get('/filter', (req, res) => {
    res.json({
        name: 'PlayStation',
        price: 1000
    });
})

router.get('/generate/:size', (req, res) => {
    const { size } = req.params;
    const products = generateProducts(size)
    res.json(products);
})

// query params
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'Nintendo switch',
        price: 1000
    });
})

export { router };