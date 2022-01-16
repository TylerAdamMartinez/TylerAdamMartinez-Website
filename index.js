const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/resume', (req, res) => res.render('pages/resume'))
  .get('/pdf', (req, res) => res.render('/Resume.pdf'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
