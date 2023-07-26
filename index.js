import express from 'express';
import { routerApi } from './routes/index.js'

import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler.js';

const app = express();
const port = 3000;

//middleware
app.use(express.json());

routerApi(app);


app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Escuchando puerto ' + port);
});