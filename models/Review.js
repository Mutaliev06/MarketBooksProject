const {Schema, model} = require('mongoose')

const schema = new Schema({
  userName: String,
  text: String,
  book:{
    ref: 'Book',
    type: Schema.Types.ObjectId
  },
  createdAt: Date,
  updatedAt: Date,
})