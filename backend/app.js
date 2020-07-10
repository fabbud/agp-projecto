require('dotenv').config();
const express = require('express');

const port = 5000;
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const sendNodemailer = require('./nodemailer');
const connection = require('./config');


const homepageRouter = require('./routes/homepageRouter');
const newsRouter = require('./routes/newsRouter');
const journalRouter = require('./routes/journalRouter');
const loginRouter = require('./routes/loginRouter');

app.use(express.json());

connection.connect((err) => {
  if (err) throw err;
  console.log('Database successfully connected');
});

app.use('/login', loginRouter);
app.use('/homepage', homepageRouter);
app.use('/news', newsRouter);
app.use('/journal', journalRouter);

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
  },
  (email, password, cb) => {
    connection.query('SELECT * from login WHERE email = ?', [email], (err, results) => {
      if (err) return cb(err);
      if (!results.length) {
        return cb(null, false, { message: 'Invalid Email' });
      }
      if (!bcrypt.compareSync(password, results[0].password)) {
        return cb(null, false, { message: 'Invalid Password' });
      }
      return cb(null, results[0]);
    });
  },
));

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'agp_secret',
    },
    ((jwtPayload, cb) => cb(null, jwtPayload)),
  ),
);

// const passportMiddleware = passport.authenticate('jwt', { session: false });

// Nodemailer - Send Contact form API
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
