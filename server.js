const express = require('express');
const app = express();
const data = require('./public/mockData.json');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

const errorMessage = (request, response, next) => {
  response.status(404).send('You are wrong, try again');
};

app.use(urlLogger, timeLogger);

app.use(express.static('public'));

app.get('/error', errorMessage);

app.get('/json', (request, response) => {
  response.status(200).json(data);
});

app.listen(3000, () => {
  console.log('Express Intro running on localhost:3000');
});
