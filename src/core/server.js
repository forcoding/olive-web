import Koa from 'koa';
import mongoose from 'mongoose';
import middlewares from '../middleware/common';
import swig from 'swig';

//设置swig时区
swig.setDefaultTZOffset(-480);

const PORT = 3000;

let app = new Koa();

app.use(middlewares());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test?poolSize=2');

mongoose.connection.on('open', function (err) {
    app.connection = mongoose.connection;
    console.info('Mongoose started.');
});
mongoose.connection.on('error', function (err) {
    console.info('Mongoose error:', err.stack);
});

export default {
    start(){
        app.listen(PORT, function (err) {
            if (err)throw err;

            console.info(`Server started on ${PORT}.`);
        });
    }
};

