const path = require('path');
const Book = require('../models/Book');

const controllers = {
  getBooks: async (req, res) => {
    const books = await Book.findById({
      _id: req.params.id,
    });
    res.json(books)
  },
  getBookByGenreId: async (req, res) => {
    const bookGenreId = await Book.find({
      genre: req.params.id
    })
    res.json(bookGenreId)
  },
  getBooksRandom: async (req, res) =>{
    const randomBooks = await Book
    .find()
    .limit(6)
    res.json(randomBooks)
  },
  uploadImage: async (req, res) => {
    const newFile = `${Math.random() * 100000}${path.extname(req.file.image.name)}`;
    await req.files.image.mv(newFile, (err) => {
    if(err){
      console.log(err)
    } else {
      res.json("Файл загружон")
    }
  })
  }
}
module.exports = controllers;


