const Genre = require('../models/Genre')

class genresControllers {
  async getGenres (req, res) {
    try {
      const genres = await Genre.find({})
      res.json(genres)
    } catch (e) {
      res.json(e.message)
    }
  }
}


module.exports = new genresControllers()