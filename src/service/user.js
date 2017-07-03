import { userSchema } from '../model/user';

userSchema.statics.findMore = async function (name) {
    await this.find({ name: name });
};