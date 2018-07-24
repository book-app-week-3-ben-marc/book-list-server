'use strict';

const PORT = process.env.PORT || 3000;
if (!PORT) throw new Error('PORT is missing');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (request, response) => response.send('Server running'));

// Create a new endpoint at GET /api/v1/books which will retrieve an array of book objects from the database, limited to only the book_id, title, author, and image_url.

app.get('/api/v1/books', (request, response) => {
  response.send([{
      book_id: 1,
      title: 'Harry Potter and the Sorcerer&apos;s Stone',
      author: 'J.K. Rowling',
      image_url: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg'
    },
    {
      book_id: 2,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      image_url: 'https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg'
    },
    {
      book_id: 3,
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J.K. Rowling',
      image_url: 'https://images-na.ssl-images-amazon.com/images/I/51JAGM6G3PL._SX316_BO1,204,203,200_.jpg'
    },
  ]);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));