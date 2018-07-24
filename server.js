'use strict';

const PORT = process.env.PORT || 3000;
if (!PORT) throw new Error('PORT is missing');

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());

app.get('/', (request, response) => response.send('Server running'));

// Temp Database
let nextBookId = 1;
const books = [
  {
    book_id: nextBookId++,
    title: 'Harry Potter and the Sorcerer&apos;s Stone',
    author: 'J.K. Rowling',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg'
  },
  {
    book_id: nextBookId++,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg'
  },
  {
    book_id: nextBookId++,
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/51JAGM6G3PL._SX316_BO1,204,203,200_.jpg'
  },
];

app.get('/api/v1/books', (request, response) => {
  response.send(books);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));