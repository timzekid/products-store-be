import mongoose     from 'mongoose';
import Base         from 'service-layer/Base';
import { dumpProduct } from '../utils.js';

const Products = mongoose.model('Products');

export default class Update extends Base {
    /* eslint-disable camelcase */
    static validationRules = {
        id   : [ 'required' ],
        data : ['required', { 'nested_object' : {
            name        : ['required', { min_length: 4 }, { max_length: 8 } ],
            description : ['required', { min_length: 10 }, { max_length: 100 } ],
            color       : { one_of: ['GREEN', 'RED', 'BLUE'] }
        } } ]
    };
    /* eslint-enable camelcase */

    async execute(data) {
        let product = await Products.findById(data.id);

        product = await this._updateProduct(product, data.data);

        return {
            data : dumpProduct(product)
        };
    }

    async _updateProduct(product, data) {
        const productForUpdate = product;

        Object.keys(data).forEach(key => {
            productForUpdate[key] = data[key];
        });

        await productForUpdate.save();

        return productForUpdate;
    }
}
