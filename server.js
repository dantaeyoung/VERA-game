const express = require('express');
const app = express();

module.exports = app
  .use(express.static(__dirname + '/public'))
  .get('/', (req, res, next) => res.render('./public/index.html'))
  .get('/github', (req, res, next) => res.redirect('https://github.com/luisamiranda/VERA-game'))
  .get('/', (err, req, res, next) => console.error(err))
  .listen(5050, (req, res, next) => console.log('I am up and running ^_^'));

