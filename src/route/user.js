import User from '../model/user'

export default {
    async find(ctx){
        let users = await User.find().exec();

        return ctx.render('index', { users: users });
    }
};