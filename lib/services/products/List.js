import mongoose     from 'mongoose';
import Base         from 'service-layer/Base';
import { dumpProduct } from '../utils.js';

const products = mongoose.model('Products');

export default class List extends Base {
    static validationRules = {
        limit  : [ 'positive_integer' ],
        offset : [ 'positive_integer' ]
    };

    async execute(params) {
        const limit  = +params.limit || 20;
        const offset = +params.offset || 0;

        const [products, totalCount] = await Promise.all([
            products.find().limit(limit).skip(offset),
            products.count()
        ]);

        const data = products.map(dumpProduct);

        return {
            data,
            meta : {
                totalCount,
                filteredCount: products.length,
                limit,
                offset
            }
        };
    }
}
