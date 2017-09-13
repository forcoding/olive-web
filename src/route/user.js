import User from '../model/user'

const MarkdownIt = require('markdown-it'),
    path = require('path'),
    fs = require('fs');

let md = new MarkdownIt(),
    source = fs.readFileSync(path.resolve(__dirname, '../../test/Affix.md')),
    result = md.render(source.toString());

export default {
    async find(ctx){
        let users = await User.find().exec();

        return ctx.render('index', { users: users, md: result });
    }
};