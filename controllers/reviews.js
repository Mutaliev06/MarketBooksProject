const Review = require('../models/Review')

const reviewController =  {
  async getBookReview (req,res) {
    try {
      //const {id} = req.params.id;
      const bookReview = await Review.find({
        book:req.params.id
      })
      res.json(bookReview)
    } catch (e){
      res.json(e.message)
    }
  },
  async postBookReview (req,res){
    try{
      const bookId = await Review.find({
        book: req.params.id
      })
      const postReview = await  Review.create({
        book: bookId,
        text: req.body.text,
        userName: req.body.userName
      })
      await postReview.save()
      res.json(postReview)
    }catch (e){
      res.json(e.message)
    }
  }
}

module.exports = reviewController


