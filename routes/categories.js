import express from "express";
const router = express.Router()

import { getAllCategories, createCategory, deleteCategory} from '../Controllers/categories.js'

router.get('/', getAllCategories)
router.post('/', createCategory)
router.delete('/:id', deleteCategory)

export default router