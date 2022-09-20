/* eslint-disable import/extensions */
require('dotenv').config();
const express = require('express');
const controller = require('./controllers.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/reviews/:product_id/list', (req, res) => {
  controller.getReviews(req, res);
});
app.get('/reviews/:product_id/meta', (req, res) => {
  console.log('received request');
  controller.getMetaData(req, res);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
