// Requiring the pages and constructing variables needed to run the server.

const express = require('express');

const PORT = process.env.port || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>
console.log('App listening at http://localhost:${PORT} 🚀')
);