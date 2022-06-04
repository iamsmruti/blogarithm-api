import Post from "../models/Post.js"
import User from "../models/User.js"

export const getPosts = async (req, res) => {
    const posts = await Post.find({})
    res.json(posts)
}

export const createPost = async (req, res) => {
    const user = req.user
    if(user.is_author){
        try {
            const newPost = new Post(req.body)
            const post = await newPost.save()
            res.status(200).json(post)
        } catch (err) {
            // Check For Duplictae Titles
            // if(err.keyPattern.title) res.send("Title Already Exist")
            res.status(500).json(err)
        }
    } else {
        res.status(400).json("You are not permitted.")
    }
}

export const getPost = async (req, res) => {
    const id = req.params.id
    const reqPost = await Post.findById(id)
    res.json(reqPost)
}

export const updatePost = async (req, res) => {
    const id = req.params.id
    const ReqUser = req.user
    const post = Post.findById(id)
    if(ReqUser.is_admin == true || ReqUser.email == post.author){
        try {
            const updatedPost = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true})

            res.status(200).json(updatedPost)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json('You are not permitted.')
    }
}

export const deletePost = async (req, res) => {
    const id = req.params.id
    const ReqUser = req.user
    const post = Post.findById(id)

    if(ReqUser.is_admin == true || ReqUser.email == post.author){
        try {
            try {
                await Post.findByIdAndDelete(id)
                res.status(200).json("Post has been Deleted")
            } catch (err) {
                res.status(500).json(err)
            }
        } catch (err) {
            res.status(404).json("Post not Found")
        }
    } else {
        res.status(401).json("You are not permitted.")
    }
}