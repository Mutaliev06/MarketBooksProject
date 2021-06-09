const { Router } = require ('express');
const genresController = require("../controllers/genres")

const router = Router()

router.patch('/genres', genresController.getGenres)

module.exports = router