module.exports = function () {
    return async (ctx, next) => {
        ctx.status = 404;
        return ctx.render('404', {url: ctx.url});
    };
};