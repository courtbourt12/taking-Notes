const fb = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
// Get request to retrieve the notes.

fb.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// Post request to post the saved notes.

fb.post('/', (req, res) => {
    // Destructuring assignment for the items in req.body
    const savingNote = req.body;

    readAndAppend(savingNote, './db/db.json');
});

module.exports = fb;

// Delete request to delete the saved notes.