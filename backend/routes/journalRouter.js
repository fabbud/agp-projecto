const express = require('express');
const router = express.Router();
const connection = require('../config');

const jwtMiddleware = require('../services/jwtMiddleware');

router.get('/', jwtMiddleware, (req, res) => {
    connection.query('SELECT * FROM journal WHERE publish=sim ORDER BY edition DESC',
        (err, results) => {
            if (err) {
                res.status(400).send('Query Error')
            } else {
                if (results.length === 0) {
                    res.status(404).send('Edition not found')
                } else {
                    res.status(200).json(results)
                }
            }
        }
    )
})

router.post('/', jwtMiddleware, (req, res) => {
    const formData = req.body
    connection.query('INSERT INTO journal SET ?',
        [formData],
        (err, results) => {
            if (err) {
                res.status(400).send('Error loading journal')
                console.log(err)
            } else {
                res.status(200).send('New Journal loaded')
            }
        }
    )
})

router.put('/', jwtMiddleware, (req, res) => {
    connection.query('UPDATE journal SET ? WHERE edition=?',
        [req.body, req.body.edition],
        (err, results) => {
            if (err) {
                res.status(400).send('Newspaper not updated')
            } else {
                if (results.length === 0) {
                    res.status(400).sen('Not existing newspaper edition')
                } else {
                    res.status(200).send('Newspaper edition updated')
                }
            }
        }

    )
})

router.delete('/', jwtMiddleware, (req, res) => {
    connection.query('DELETE FROM journal WHERE edition=?',
        req.body.edition,
        (err, results) => {
            if (err) {
                res.status(400).send('Error deleting newspaper edition')
            } else {
                if (results.length === 0) {
                    res.status(400).semd('Not existing newspaper edition')
                } else {
                    res.status(200).send('Newspaper edition deleted')
                }
            }
        }
    )
}
)

module.exports = router;
