import mongoose     from 'mongoose';
import Base         from 'service-layer/Base';
import { dumpProduct } from '../utils.js';

const Products = mongoose.model('Products');

export default class List extends Base {
    static validationRules = {
        limit  : [ 'positive_integer' ],
        offset : { 'min_number': 0 }
    };

    async execute(params) {
        const limit  = +params.limit || 20;
        const offset = +params.offset || 0;

        const [products, totalCount] = await Promise.all([
            Products.find().limit(limit).skip(offset),
            Products.count()
        ]);

        const data = products.map(dumpProduct);

        return {
            data,
            meta : {
                totalCount,
                filteredCount : products.length,
                limit,
                offset
            }
        };
    }
}
