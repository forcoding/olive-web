import route from 'koa-router';
import user from './user';
import post from './post';

let router = route();

router.get('/users', user.find);
router.get('/posts/list', post.find);
router.post('/posts/', post.save);
router.get('/posts/:title', post.findOne);

export default router;