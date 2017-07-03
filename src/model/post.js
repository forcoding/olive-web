import mongoose, { Schema } from 'mongoose';

export const postSchema = new Schema({
    title: String,
    content: String,
    author: String
}, { timestamps: true }).index({ title: 1 });

export default mongoose.model('posts', postSchema);
