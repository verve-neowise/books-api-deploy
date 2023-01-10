import { Router } from "express";
import { getBooks, createBook, deleteBook } from '../controllers/books.controller.js'
import { authCheck } from "../middlewares/auth-check.js";

const router = Router()

router.get('/', authCheck(false), getBooks)
router.post('/', authCheck(true), createBook)
router.delete('/:id', authCheck(true), deleteBook)

export default router