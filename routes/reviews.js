const { Router} = require('express')
const router = Router()

const reviewController = require('../controllers/reviews')

router.get('/book/:id/reviews', reviewController.getBookReview)
router.post('/book/:id/reviews', reviewController.postBookReview)

module.exports = router