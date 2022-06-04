import express from 'express'
const router = express.Router()

import { getPosts , getPost, updatePost, deletePost , createPost} from '../controllers/posts.js'
import {verify} from '../middlewares/verify.js'

router.get('/all', getPosts)
router.get('/:id', getPost)
router.post('/',verify, createPost)
router.put('/:id',verify, updatePost)
router.delete('/all',verify, deletePost)

export default router