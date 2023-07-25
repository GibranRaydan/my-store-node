import express from 'express';

const router = express.Router();

// more than one query params
router.get('/:categorieId/products/:productId', (req, res) => {
    const { categorieId, productId } = req.params;
    res.json({
        categorieId,
        productId,
        name: 'Nintendo switch',
        price: 1000
    });
})

export { router };
