import mongoose, { Schema } from 'mongoose';

export const userSchema = new Schema({
    name: String,
    password: String
}, { timestamps: true }).index({ name: 1 });

export default mongoose.model('users', userSchema);
