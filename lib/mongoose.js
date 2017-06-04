import mongoose from 'mongoose';
import bluebird from 'bluebird';
import X        from 'service-layer/Exception';
import config   from '../etc/config.json';

import './models/Products';

const dbPort = config.db.port;
const dbHost = config.db.host;
const dbName = config.db.name;

mongoose.Promise = bluebird;
mongoose.connect(`mongodb://${dbHost}:${dbPort}/${(dbName)}`);

mongoose.Model.findById = async function findById(id) {
    const exception = new X({
        code   : 'WRONG_ID',
        fields : { id: 'WRONG_ID' }
    });

    if (!id) throw exception;

    const doc = await this.findOne({ _id: id });

    if (!doc) throw exception;

    return doc;
};

export default mongoose;
