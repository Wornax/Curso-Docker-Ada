// app.js
const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 80;

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'mydatabase',
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) throw err;
    res.send('Data from database: ' + JSON.stringify(result));
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
