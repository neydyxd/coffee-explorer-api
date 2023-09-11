const express = require('express');
const mongoose = require('mongoose');
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://127.0.0.1/CoffeeLike');
const app = express();
app.use(express.json())
app.use('/news', require('./routes/news'));
app.listen(PORT, () => {
    console.log('serves is running on port 3000');
  });