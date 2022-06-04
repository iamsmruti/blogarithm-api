import express from 'express'
const router = express.Router()

import {verify} from '../middlewares/verify.js'

import { getOwnInfo, getAllUsers, getUser, updateUser, deleteUser } from '../controllers/users.js'

router.get('/', verify, getOwnInfo)
router.get('/all',verify, getAllUsers)
router.get('/:id',verify, getUser)
router.put('/:id',verify, updateUser)
router.delete('/:id',verify, deleteUser)

export default router