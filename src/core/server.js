import Koa from 'koa';
import mongoose from 'mongoose';
import middlewares from '../middleware/common';
import swig from 'swig';
import Debug from 'debug';

//设置swig时区
swig.setDefaultTZOffset(-480);

const PORT = 5000;

let app = new Koa(),
    debug = Debug('olive:server');

app.debug = function (type, message) {
    return Debug('olive-web:' + type)(message)
};
app.use(middlewares());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test?poolSize=2');

mongoose.connection.on('open', function (err) {
    app.connection = mongoose.connection;
    debug('Mongoose started.');
});
mongoose.connection.on('error', function (err) {
    debug('Mongoose error:', err.stack);
});

export default {
    start(){
        app.listen(PORT, function (err) {
            if (err)throw err;

            debug(`Server started on ${PORT}.`);
        });
    }
};

