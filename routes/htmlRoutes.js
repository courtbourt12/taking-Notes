const path = require('path');
const router = require('express').Router();

// GET route for the note taking page.

router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

// Wildcard route to direct users to a 404 page.

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;