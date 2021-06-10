const { Router } = require('express');
const controllers = require('../controllers/books');
const router = Router();

router.get('/', controllers.getBooksRandom)
router.get('/books/:id', controllers.getBooks);
router.get('/genres/:id/books', controllers.getBookByGenreId);
router.post('/upload', controllers.uploadImage)


module.exports = router