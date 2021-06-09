const { Schema, model} = require('mongoose');
const schema = new Schema({
  name: String,
  title: String,
  subtitle: String,
  genre: {
    ref: "genre",
    type: Schema.Types.ObjectId,
  },
  createdAt: Date,
  updatedAt: Date,
})

module.exports = model("book", schema);