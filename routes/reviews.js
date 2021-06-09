const { Router} = require('express')
const router = Router()

const {getBookReview,postBookReview} = require('../controllers/reviews')

router.get('book/:id/reviews', getBookReview)
router.post('book/:id/reviews',postBookReview)