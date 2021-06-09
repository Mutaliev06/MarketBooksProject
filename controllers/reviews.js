const Review = require('../models/Review')

const reviewController =  {
  async getBookReview (req, res) {
    try {
      const bookReview = await Review.find({
        book: req.params.id
      })
      res.json(bookReview)
    } catch (e) {
      res.json(e.message)
    }
  },

  async postBookReview (req, res) {
      try {
        const review = new Review({
          text: req.body.text,
          userName: req.body.userName
        })
        await review.save()
        res.json(review)
      } catch (e) {
        res.json(e.message)
      }
  }
}

module.exports = reviewController


