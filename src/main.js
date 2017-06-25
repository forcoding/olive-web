import Koa from 'koa';

let app = new Koa();

app.use(async (ctx, next) => {
    if (ctx.path === '/hello') {
        ctx.body = 'Hello world.'
    }
});

app.listen(4000, function (err) {
    if (err) throw err;

    console.info('Server is running on 3000.');
});