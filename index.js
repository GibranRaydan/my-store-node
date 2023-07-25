import express from 'express';
import { routerApi } from './routes/index.js'

const app = express();
const port = 3000;

//middleware
app.use(express.json());

routerApi(app);

app.listen(port, () => {
    console.log('Escuchando puerto ' + port);
});