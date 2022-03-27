// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));


// use Routes
app.use('/api/books', books);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.join(__dirname, 'mern-app', 'public')));
// Step 2:
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'mern-app', 'public', 'index.html'))
});

app.listen(port, () => console.log(`Server running on port ${port}`));
