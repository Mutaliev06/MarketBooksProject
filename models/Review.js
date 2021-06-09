const {Schema, model} = require('mongoose')

const schema = new Schema({
  text: String,
  book:{
    ref: 'book',
    type: Schema.Types.ObjectId
  },
  userName: String,
  createdAt: Date,
  updatedAt: Date,
})


module.exports = model("review", schema);