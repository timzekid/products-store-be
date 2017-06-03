import mongoose   from 'mongoose';
import timestamps from 'mongoose-timestamp';

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name        : { type: String, required: true },
    description : { type: String, required: true },
    color       : { type: String, required: true }
});

ProductsSchema.plugin(timestamps);

mongoose.model('Products', ProductsSchema);
