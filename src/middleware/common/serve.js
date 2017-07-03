import Koa from 'koa';
import mount from 'koa-mount';
import serve from 'koa-static';
import config from '../../config';

module.exports = function (options = {}) {
    let app = new Koa(),
        prefix = config.STATIC_PREFIX,
        dir = config.STATIC_DIR;

    app.use(serve(dir));

    return mount(prefix, app);
};