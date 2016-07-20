//jshint esversion:6

const express = require('express');
const multer = require('multer');
const app = express();

app.set('view engine', 'jade');
app.get('/', (req, res, next) => res.render('index'));

app.post('/upload', multer({}).single('file-input'), (req,res) =>
  res.json({size:req.file.size + ' bytes'}));

app.listen(process.env.PORT || 3000, () => console.log('The server is running'));
