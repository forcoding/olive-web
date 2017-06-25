module.exports = function () {
    return async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            ctx.status = 500;
            ctx.app.emit('error', err);
           return ctx.render('500');
        }
    };
};