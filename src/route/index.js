import route from "koa-router";
import user from "./user";
import post from "./post";
import har from "./har";

let router = route();

router.get('/', async (ctx) => {
    return ctx.render('index', {});
});
router.get('/business', async (ctx) => {
    return ctx.render('business/index')
});
router.get('/honor', async (ctx) => {
    return ctx.render('honor/index')
});
router.get('/service', async (ctx) => {
    return ctx.render('service/index')
});

router.get('/about', async (ctx) => {
    return ctx.render('service/about')
});

export default router;