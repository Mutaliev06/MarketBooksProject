const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', controllers.getBooksRandom)
router.get('/books/:id', controllers.getBooks);
router.get('/genres/:id/books', controllers.getBookByGenreId);