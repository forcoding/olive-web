const Koa = require('koa'),
    path = require('path'),
    mount = require('koa-mount'),
    serve = require('koa-static');

let app = new Koa();

module.exports = function (options = {}) {
    let prefix = options.prefix || '/static',
        dir = options.dir || path.resolve('../docs');
    app.use(serve(dir));

    return mount(prefix, app);
};