const path = require('path'),
    compose = require('koa-compose'),
    compress = require('koa-compress'),
    favicon = require('koa-favicon'),
    conditional = require('koa-conditional-get'),
    etag = require('koa-etag'),
    logger = require('koa-logger'),
    router = require('./router'),
    serve = require('./serve'),
    error = require('./error'),
    notFound = require('./404'),
    view = require('./view');

module.exports = function () {
    return compose([
        logger(),
        conditional(),
        etag(),
        async (ctx, next)=>{
            ctx.compress = true;
            await compress({threshold: 1024})(ctx, next);
        },
        favicon(path.resolve('../public/favicon.ico')),
        view(),
        error(),
        router(),
        notFound(),
        serve()
    ]);
};