const router = require('koa-router')();

module.exports = function (options) {
    router.get('/hello', async (ctx)=>{
        return ctx.render('index');
    });
    router.get('/b', async (ctx)=>{
        console.info(ctx.compress);
        return ctx.render('index', {user: {name: 'wzz'}, title: 'bbbb'});
    });

    return router.routes();
};