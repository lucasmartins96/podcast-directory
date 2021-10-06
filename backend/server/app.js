const express = require('express');
const cors = require('cors');
const podcastsRouter = require('./routes/podcasts');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/podcasts', podcastsRouter);

// catch server errors and respond with 500
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
