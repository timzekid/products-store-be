import mongoose from 'mongoose';
import Base     from 'service-layer/Base';

const products = mongoose.model('Products');

export default class Create extends Base {
    static validationRules = {
        id : [ 'required' ]
    };

    async execute(data) {
        const product = await products.findById(data.id);

        await product.remove();

        return {};
    }
}
