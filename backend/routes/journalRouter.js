const express = require('express');
const router = express.Router();
const connection = require('../config');
const port = 3000;

router.use(express.json())

connection.connect((err) => {
    if (err) {
        throw err
    } else {
        console.log('database successfully connected')
    }
})

router.get('/api/jornal', (req, res) => {
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

router.post('/api/jornal', (req, res) => {
    const formData = req.body
    connection.query('INSERT INTO journal SET ?',
        formData,
        (err, results) => {
            if (err) {
                res.status.send('Error loading journal')
            } else {
                res.status(200).send('New Journal loaded')
            }
        }
    )
})

router.put('/api/jornal', (req, res) => {
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

router.delete('/api/jornal', (req, res) => {
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



router.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`The router is running on port ${port}`)
    }
})