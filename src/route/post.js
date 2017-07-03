import Post from '../model/post';

export default {
    async find(ctx){
        let posts = await Post.find();

        return ctx.render('posts/index', { posts: posts });
    },

    async save(ctx){
        let post = await Post.create({ title: ctx.query.title, content: ctx.query.content });

        return ctx.body = post;
    },

    async findOne(ctx){
        let post = await Post.findOne({ title: ctx.params.title }).exec();

        console.info(post.createdAt);
        // post.createdAt = moment(post.createdAt).format('LLL');
        // console.info(moment(post.createdAt).format('LLL'));
        // console.info(moment(post.createdAt).format('LLL'));
        // console.info(moment("2010-10-20 4:30 +0000", "YYYY-MM-DD HH:mm Z"));
        // console.info(moment().get('year'));
        return ctx.render('posts/index', { post: post })
    }
};