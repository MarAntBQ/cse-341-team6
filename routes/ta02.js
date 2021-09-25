//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
/*
//const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
*/

const express = require('express');
const router = express.Router();

const users =['Raul','Filomena','Alex'];

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    usrs: users,
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

// /admin/add-product => POST
router.post('/addUser', (req, res, next) => {
  users.push({ userName: req.body.userName });
  res.redirect('/ta02');
});

module.exports = router;
