import mongoose from 'mongoose'

const PostSchema = mongoose.Schema({
    header_img: {
        type: String, 
        required: true
    },
    title: {
        type: String, 
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: Object,
        required: true
    }
}, {timestamps: true})

const Post = mongoose.model('Post', PostSchema)
export default Post