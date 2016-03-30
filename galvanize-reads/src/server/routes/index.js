var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Galvanize Reads' });
});

router.get('/books', function(req, res, next) {
  knex.select('*').from('books')
    .then(function (books) {
      
        res.render('books', {
          title: 'Galvanize Reads',
          books: books});
      
    });
  });

router.get('/books/new', function (req, res, next) {
  knex.select('*').from('books')
    .then(function (books) {
      
        res.render('new', {
          title: 'Galvanize Reads',
          books: books});
      
    });});

router.post('/books/new', function (req, res, next) {
  knex('books').insert({
      description: req.body.description,
      title: req.body.title,
      picture: req.body.picture,
      genre: req.body.genre,
      year: req.body.year

  })
    .then(function () {
      
            res.redirect('/books');
      
    });});


router.post('/books/:id/remove', function (req, res, next) {
  knex('books').where('id', req.params.id).del()
  .then(function () {
    res.redirect('/books');
  });
});

router.get('/books/:id/edit', function(req, res, next) {
  var id = req.params.id;
  knex.select('*').from('books').where('id', id)
    .then(function (books) {
      
        res.render('edit', {
          title: 'Galvanize Reads',
          books: books});
      
    });
  });

router.post('/books/:id/edit', function(req, res, next) {
  console.log(req.body);
  var theID = req.params.id;
  knex('books')
      .where('id', theID)
      .update({
      title: req.body.title,
      description: req.body.description,
      picture: req.body.picture,
      genre: req.body.genre,
      year: req.body.year,
      
  }).then(function() {
    res.redirect('/books');
  });
  });

router.get('/authors', function(req, res, next) {
 knex.select('*').from('authors')
    .then(function (authors) {
      
        res.render('authors', {
          title: 'Galvanize Reads',
          authors: authors});
      
    });});

router.get('/author/new', function (req, res, next) {
  knex.select('*').from('authors')
    .then(function (authors) {
      
        res.render('newauthors', {
          title: 'Galvanize Reads',
          authors: authors});
      
    });});

router.post('/author/new', function (req, res, next) {
  knex('authors').insert({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      picture: req.body.picture,
      biography: req.body.biography

  })
    .then(function () {
      
            res.redirect('/authors/');
      
    });});

router.post('/authors/:id/remove', function (req, res, next) {
  knex('authors').where('id', req.params.id).del()
  .then(function () {
    res.redirect('/authors');
  });
});

router.get('/authors/:id/edit', function(req, res, next) {
  var id = req.params.id;
  knex.select('*').from('authors').where('id', id)
    .then(function (authors) {
      
        res.render('editauthors', {
          title: 'Galvanize Reads',
          authors: authors});
      
    });
  });

router.post('/authors/:id/edit', function(req, res, next) {
  console.log(req.body);
  var theID = req.params.id;
  knex('authors')
      .where('id', theID)
      .update({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      biography: req.body.biography,
      picture: req.body.picture
      
  }).then(function() {
    res.redirect('/authors');
  });
  });

module.exports = router;
