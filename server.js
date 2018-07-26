'use strict';

const PORT = process.env.PORT || 3000;
if (!PORT) throw new Error('PORT is missing');

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (request, response) => response.send('Server running'));

// Temp Database
let nextBookId = 1;
const books = [{
    book_id: nextBookId++,
    title: 'Harry Potter and the Sorcerer&apos;s Stone',
    author: 'J.K. Rowling',
    isbn: '8675309',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg',
    description: 'harry potter\'s first book'
  },
  {
    book_id: nextBookId++,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    isbn: '30587',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg',
    description: 'harry potter\'s second book'
  },
  {
    book_id: nextBookId++,
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
    isbn: '230948',
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/51JAGM6G3PL._SX316_BO1,204,203,200_.jpg',
    description: 'harry potter\'s third book'
  },
];

app.get('/api/v1/books', (request, response) => {
  response.send(books);
});

app.get('/api/v1/books/:id', (request, response) => {
  console.log(`Finding book with id = ${request.params.id}`);
});

app.delete('/api/v1/books/:id', (request, response) => {
  console.log(`Deleting book with id = ${request.params.id}`);
  function bookDelete() {
    confirm('Are you sure you would like to delete this book?');
  }
});

  let currentBook = books.find(book => book.book_id === parseInt(request.params.id));
  console.log(currentBook);
  if (currentBook) {
    response.send(currentBook);
    } else {
      response.sendStatus(404);
    };

app.post('/api/v1/books/add', (request, response) => {
  let newBook = {};
  newBook.book_id = nextBookId++;
  newBook.title = request.body.title;
  newBook.author = request.body.author;
  newBook.isbn = request.body.isbn;
  newBook.image_url = request.body.image_url;
  newBook.description = request.body.description;
  books.push(newBook);
  console.log(books);
  response.sendStatus(201);
});

app.put('/api/v1/books/:id', (request, response) => {
  console.log(`Updating book with id = ${request.params.id}`);

  let currentBook = books.find(book => book.book_id === parseInt(request.params.id));
  console.log(currentBook);
  if (currentBook) {
    currentBook.title = request.body.title;
    currentBook.author = request.body.author;
    currentBook.isbn = request.body.isbn;
    currentBook.image_url = request.body.image_url;
    currentBook.description = request.body.description;
    console.log(books);
    response.sendStatus(200);
  }
  else {
    response.sendStatus(404);
  }
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));