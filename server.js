'use strict';

const PORT = process.env.PORT;
if (!PORT) throw new Error('PORT is missing');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (request, response) => response.send('Server running'));

app.get('/test', (request, response) => response.send('hello world'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));