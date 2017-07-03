import path from 'path';
import compose from 'koa-compose';
import compress from 'koa-compress';
import favicon from 'koa-favicon';
import conditional from 'koa-conditional-get';
import etag from 'koa-etag';
import logger from 'koa-logger';
import router from './router';
import serve from './serve';
import error from './error';
import notFound from './404';
import view from './view';
import config from '../../config';

export default function () {
    return compose([
        logger(),
        conditional(),
        etag(),
        async (ctx, next) => {
            ctx.compress = true;
            await compress({ threshold: 1024 })(ctx, next);
        },
        favicon(config.FAVICON_FILE),
        view(),
        error(),
        serve(),
        router(),
        notFound()

    ]);
};
