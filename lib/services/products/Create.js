import Base     from 'service-layer/Base';
import mongoose from '../../mongoose';

import { dumpProduct } from '../utils.js';

const Products = mongoose.model('Products');

export default class Create extends Base {
    /* eslint-disable camelcase */
    static validationRules = {
        data : ['required', { 'nested_object' : {
            name        : ['required', { min_length: 4 }, { max_length: 8 } ],
            description : ['required', { min_length: 10 }, { max_length: 100 } ],
            color       : { one_of: ['GREEN', 'RED', 'BLUE'] }
        } } ]
    };
    /* eslint-enable camelcase */

    async execute(data) {
        const product = await Products.create(data.data);

        return {
            data : dumpProduct(product)
        };
    }
}
