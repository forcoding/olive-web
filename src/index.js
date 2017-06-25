const Koa = require('koa'),
    compose = require('koa-compose'),
    mongoose = require('mongoose'),
    app = new Koa(),
    middlewares = require('./middleware/common');


app.use(middlewares());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test?poolSize=2');
const UserSchema = mongoose.Schema({
    name: String,
    password: String
});

mongoose.connection.on('open', function (err) {
    console.info('Mongoose opened:');
});
mongoose.connection.on('error', function (err) {
    console.info('error:', err);
});

const User = mongoose.model('User', UserSchema);

app.use(async (ctx, next) => {
    if (ctx.request.url === '/hello') {
       let user = await new User({name: 'wzz', password: '222222'}).save();
        return ctx.render('index', {title: 'world..', user: user});
    }
});

app.listen(3000, function (err) {
    if (err) throw err;

    console.info('Server is running on 3000.');
    // console.info(app.middleware);
    // console.info(compose(app.middleware));
});

