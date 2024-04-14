const express = require('express');
const { readFileSync } = require('fs');
const { resolve } = require('path');

const app = express();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  next();
})

app.get('/products', function (req, res) {
  const result = JSON.parse(readFileSync(resolve(__dirname, './data/products.json'), 'utf8'));
  res.send(result);
})

app.get('/detail/:id', function (req, res) {
  const data = JSON.parse(readFileSync(resolve(__dirname, './data/products.json'), 'utf8'));
  const { id } = req.params;
  const detail = data.find(item => item.id == id);
  res.send(detail);
})

app.listen(8080, function () {
  console.log('Express server is running!');
})
