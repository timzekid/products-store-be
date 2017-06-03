import { makeServiceRunner }  from '../expressServiceRunning';

export default {
    create : makeServiceRunner('products/Create', req => req.body),
    update : makeServiceRunner('products/Update', req => ({ ...req.body, id: req.params.id })),
    delete : makeServiceRunner('products/Delete', req => ({ id: req.params.id })),
    list   : makeServiceRunner('products/List',   req => req.query),
    show   : makeServiceRunner('products/Show',   req => ({ id: req.params.id }))
};
