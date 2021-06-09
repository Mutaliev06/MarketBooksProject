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
    //const randomBooks = await Book.find({})
    res.json(randomBook(Book, 6))
  }
}
function randomBook(data, count){
  let bookCount = [];
  for (let i = 0; i < count; i++) {
    bookCount.push(Math.floor(Math.random() * data.length));
  }
  return bookCount;
}
module.exports = controllers;


