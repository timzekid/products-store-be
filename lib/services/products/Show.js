import mongoose     from 'mongoose';
import Base         from 'service-layer/Base';
import { dumpProduct } from '../utils.js';

const Products = mongoose.model('Products');

export default class Show extends Base {
    static validationRules = {
        id : ['required', 'object_id']
    };

    async execute(data) {
        const product = await Products.findById(data.id);

        return {
            data : dumpProduct(product)
        };
    }
}
