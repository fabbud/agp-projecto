require('dotenv').config();
const express = require('express');

const app = express();
const connection = require('./config');

const port = 5000;

const homepageRouter = require('./routes/homepageRouter');
const newsRouter = require('./routes/newsRouter');
const journalRouter = require('./routes/journalRouter');

app.use(express.json());

connection.connect((err) => {
  if (err) throw err;
  console.log('database successfully connected');
});

app.use('/homepage', homepageRouter);
app.use('/news', newsRouter);
app.use('/journal', journalRouter);

// implement the API
app.get('/', (req, res) => {
  res.send('BACKOFFICE');
});

// / in case path is not found, return the ‘Not Found’ 404 code
app.use((_req, _res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The app is running at ${port}`);
  }
});
