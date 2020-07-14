const express = require('express');

const router = express.Router();
const connection = require('../config');

const jwtMiddleware = require('../services/jwtMiddleware');

router.get('/', /*jwtMiddleware,*/ (req, res, next) => {
  connection.query('SELECT * FROM homepage', (err, results) => {
    if (err) {
      res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    } else {
      res.json(results);
    }
  });
});

router.get('/:mode', /*jwtMiddleware,*/ (req, res, next) => {
  let query = '';
  if (req.params.mode === 'journal') {
    query = 'SELECT journal.* FROM homepage JOIN journal ON homepage.journal_edition = journal.edition';
  } else {
    query = 'SELECT news.* FROM homepage JOIN news ON homepage.article_1 = news.id OR homepage.article_2 = news.id OR homepage.article_3 = news.id';
  }
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    } else {
      res.json(results);
    }
  });
});

router.put('/', /*jwtMiddleware,*/ (req, res) => {
  const newData = req.body;
  console.log(newData);
  connection.query('UPDATE homepage SET ? ', [newData], (err, results) => {
    if (err) {
      res.status(500).send('Error updating homepage data');
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
