// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');
// const cors = require('cors');
// const app = express();
// const port = 3000;

// app.use(cors());

// // Increase the body size limit
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// // MySQL connection setup
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'trustme'
// });

// db.connect(err => {
//   if (err) throw err;
//   console.log('MySQL connected...');
// });

// // Get all credit unions
// app.get('/api/credit-unions', (req, res) => {
//   const sql = 'SELECT * FROM credit_unions';
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// // Add a review
// app.post('/api/reviews', (req, res) => {
//   const { name, review, rating, email, phoneNumber, website, address, profilePhoto } = req.body;
//   const sql = 'INSERT INTO reviews (name, review, rating, email, phoneNumber, website, address, profilePhoto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
//   db.query(sql, [name, review, rating, email, phoneNumber, website, address, profilePhoto], (err, result) => {
//     if (err) throw err;
//     res.send('Review added...');
//   });
// });

// // Get all reviews
// app.get('/api/reviews', (req, res) => {
//   const sql = 'SELECT * FROM reviews';
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// // Sign in
// app.post('/api/auth/signin', (req, res) => {
//   const { name, password } = req.body;
//   const sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
//   db.query(sql, [name, password], (err, results) => {
//     if (err) throw err;
//     if (results.length > 0) {
//       res.json({ message: 'Sign in successful' });
//     } else {
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   });
// });

// // Sign up
// app.post('/api/auth/signup', (req, res) => {
//   const { name, password } = req.body;
//   const sql = 'INSERT INTO users (name, password) VALUES (?, ?)';
//   db.query(sql, [name, password], (err, result) => {
//     if (err) throw err;
//     res.json({ message: 'Sign up successful' });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



















const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Increase the body size limit
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'trustme'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Get all credit unions
app.get('/api/credit-unions', (req, res) => {
  const sql = 'SELECT * FROM credit_unions';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get details of HDFC Bank
app.get('/api/credit-unions/hdfc-bank', (req, res) => {
  const sql = "SELECT * FROM credit_unions WHERE name = 'HDFC Bank'";
  db.query(sql, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: 'HDFC Bank not found' });
    }
  });
});

// Add a review
app.post('/api/reviews', (req, res) => {
  const { name, review, rating, email, phoneNumber, website, address, profilePhoto } = req.body;
  const sql = 'INSERT INTO reviews (name, review, rating, email, phoneNumber, website, address, profilePhoto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, review, rating, email, phoneNumber, website, address, profilePhoto], (err, result) => {
    if (err) throw err;
    res.send('Review added...');
  });
});

// Get all reviews
app.get('/api/reviews', (req, res) => {
  const sql = 'SELECT * FROM reviews';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Sign in
app.post('/api/auth/signin', (req, res) => {
  const { name, password } = req.body;
  const sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
  db.query(sql, [name, password], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.json({ message: 'Sign in successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

// Sign up
app.post('/api/auth/signup', (req, res) => {
  const { name, password } = req.body;
  const sql = 'INSERT INTO users (name, password) VALUES (?, ?)';
  db.query(sql, [name, password], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Sign up successful' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
