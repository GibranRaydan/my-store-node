import express from 'express';

const router = express.Router();

// pagination
router.get('/', (req, res) => {
    const { limit, offset } = req.query;
    if(limit && offset) {
        res.json({
            limit,
            offset
        });
    } else {
        res.json({'data' : 'No hay parametros'})
    }
})

export { router };