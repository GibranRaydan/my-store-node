import express from 'express';

import {router as productRouter} from './products.router.js';
import {router as userRouter} from './users.router.js';
import {router as categorieRouter} from './categories.router.js';

function routerApi(app) {
    app.get('/', (req, res) => {
        res.send('Hola mi server en express');
    })
    const router = express.Router();

    app.use('/api/v1', router);
    router.use('/products', productRouter);
    router.use('/users', userRouter);
    router.use('/categories', categorieRouter);

}

export  { routerApi };