/* eslint import/imports-first:0  import/newline-after-import:0 */
import path from 'path';

import bluebird from 'bluebird';
global.Promise = bluebird;

import express       from 'express';
import cors          from 'cors';
import bodyParser    from 'body-parser';
import logger        from 'bunyan-singletone-facade';
import Emb           from 'express-markdown-browser';
import routesInit    from './lib/routes';
import { appPort }   from './etc/config.json';

import './lib/registerValidationRules';

const routes = routesInit();
const app    = express();
const router = express.Router();
const emb = new Emb({ path: path.join(__dirname, 'apidoc') });

console.log(`APP STARTING AT PORT ${appPort}`);

logger.init({
    directory : path.join(__dirname, 'logs'),
    name      : 'products-store'
});

app.use(bodyParser.json({ limit  : 1024 * 1024,
    verify : (req, res, buf) => {
        try {
            JSON.parse(buf);
        } catch (e) {
            res.send({
                status : 0,
                error  : {
                    code    : 'BROKEN_JSON',
                    message : 'Please, verify your json'
                }
            });
        }
    }
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

app.listen(appPort);

app.use('/api/v1', router);
app.use('/apidoc', emb);

// Products
router.post('/products',       routes.products.create);
router.delete('/products/:id', routes.products.delete);
router.get('/products',        routes.products.list);
router.get('/products/:id',    routes.products.show);
router.put('/products/:id',    routes.products.update);

export default app;
