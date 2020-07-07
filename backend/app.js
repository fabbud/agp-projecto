require('dotenv').config();
const express = require('express');

const app = express();
const connection = require('./config');
const sendNodemailer = require('./nodemailer');

const port = 5000;

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const homepageRouter = require('./routes/homepageRouter');
const newsRouter = require('./routes/newsRouter');
const journalRouter = require('./routes/journalRouter');

app.use(express.json());

connection.connect((err) => {
  if (err) throw err;
  console.log('Database successfully connected');
});

app.use('/homepage', homepageRouter);
app.use('/news', newsRouter);
app.use('/journal', journalRouter);

// Implement main API
app.get('/', (req, res) => {
  res.send('AGP BACKOFFICE');
});

// Send Contact form API
app.post('/email', sendNodemailer, (req, res) => {
  if (req.successMessage) {
    res.json({
      code: 200,
    });
  } else {
    res.json({
      code: 500,
    });
  }
});

// In case path is not found, we return the ‘Not Found’ 404 code
app.use((_req, _res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The app is running on port ${port}...`);
  }
});
