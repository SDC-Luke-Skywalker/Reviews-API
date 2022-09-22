/* eslint-disable import/extensions */
require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const controller = require('./controllers.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/loaderio-5a18b532c1cd19e2669c4fa17c1f287b.txt', (req, res) => (res.status(200).send('loaderio-5a18b532c1cd19e2669c4fa17c1f287b'))); 

app.get('/reviews/:product_id/list', (req, res) => {
  controller.getReviews(req, res);
});
app.get('/reviews/:product_id', (req, res) => {
  controller.getMetaData(req, res);
});
app.post('/reviews/:product_id', (req, res) => {
  controller.addReview(req, res);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
