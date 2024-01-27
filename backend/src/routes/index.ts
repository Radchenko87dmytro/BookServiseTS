import express from 'express';
import BookController from '../controlers/index';

//const router = new Router();
export const router = express.Router();

router.post('/books', BookController.createBook);
router.get('/books', BookController.getAllBooks);
router.get('/books/:id', BookController.getBook);
router.put('/books/:id', BookController.updateBook);
router.delete('/books/:id', BookController.deleateBook);