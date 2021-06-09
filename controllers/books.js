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
  }

  // getBooksRandom: async (req, res) => {
  //    const randomBook = (count) => {
  //     Book.findRandom().limit(3).exec(function (error, result) {
  //       res.json(result);  // -> []
  //     })
  //   }
  // }
}
module.exports = controllers;


