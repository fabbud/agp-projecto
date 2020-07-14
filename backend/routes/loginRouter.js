const express = require('express');

const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../config');
const jwtMiddleware = require('../services/jwtMiddleware');

router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ flash: err.message });
    } else {
      res.json(results);
    }
  });
});

router.post('/signin', (req, res, next) => {
  console.log('login');
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(400).json({ message: info.message });
    const token = jwt.sign(JSON.stringify(user), 'agp_secret');
    const message = 'User sign in!';
    return res.json({ user, token, message });
  })(req, res);
});

router.post('/signup', (req, res, next) => {
  const { email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  const formData = [email, hash];
  connection.query('INSERT INTO users (email, password) VALUES (?, ?)', formData, (err, results) => {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: 'User has been signed up!' });
  });
});

module.exports = router;
