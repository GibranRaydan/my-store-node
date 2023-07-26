import express from 'express';
import boom from "@hapi/boom";
import cors from 'cors';
import { routerApi } from './routes/index.js'
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler.js';

const app = express();
const port = 3000;

//middleware
app.use(express.json());
const whiteList = ['http://localhost:8080', 'https://myapp.co'];
const options = {
    origin: (origin, callback) => {
        if (whiteList.includes(origin)){
            callback(null, true);
        } else {
            callback(boom.forbidden('Domain not allowed by CORS'));
        }
    }
}

routerApi(app);
app.use(cors(options));
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Listening puerto ' + port);
});