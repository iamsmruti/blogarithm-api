import express from 'express'
const router = express.Router()

import { loginUser , registerUser, logoutUser } from '../Controllers/auth.js'

router.post('/register', registerUser )
router.post('/login', loginUser)
router.post('/logout', logoutUser)


export default router