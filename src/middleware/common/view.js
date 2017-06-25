const views = require('koa-views'),
    path = require('path');

module.exports = function () {
    return views(path.resolve('./templates'), {
        extension: 'html',
        map: {
            html: 'swig'
        }
    })
};