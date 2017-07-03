const views = require('koa-views'),
    path = require('path');

import config from '../../config/index'

module.exports = function () {
    return views(config.TEMPLATE_DIR, {
        map: {
            html: 'swig'
        }
    })
};