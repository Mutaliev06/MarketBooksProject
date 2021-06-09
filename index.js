const express = require('express');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');
const cors = require('cors')

const app = express();
const { port, url } = require('./config/index')

const router = require('./routes/index')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileupload());
app.use(router)
app.use(cors())

async function start () {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(port, () => {
      console.log('Сервер запущен...')
    })
  } catch (e) {
    console.log(e.message)
  }
}

start();