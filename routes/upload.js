const { Router } = require('express');
const Book = require('../models/Book');
const path = require('path');

const router = Router();


router.post('/:id', (req, res) => {
  const { image } = req.files;
  const fileName = `./images/${Math.random() * 10000}${path.extname(image.name)}`;
  image.mv(fileName, async (err) => {
    if (err) {
      console.log(err);
    } else {
      const book = await Book.findById(req.params.id);
      book.pathToImage = fileName;
      await book.save();
      res.json('Файл загружон');
    }
  });
});

module.exports = router;