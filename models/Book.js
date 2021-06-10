const { Schema, model} = require('mongoose');
//const random = require('mongoose-random');

const schema = new Schema({
  name: String,
  author: String,
  title: String,
  price: Number,
  genre: {
    ref: "genre",
    type: Schema.Types.ObjectId,
  },
  pathToImage: String,
  createdAt: Date,
  updatedAt: Date,
})

//schema.plugin(random, {path: 'r'})

module.exports = model("book", schema);