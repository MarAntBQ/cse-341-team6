//TA04 PLACEHOLDER

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    if (req.session.counter === undefined) {
        req.session.counter = 0;
      }
      if (!req.session.style) {
        req.session.style = 'default'; 
      }
  res.render('pages/ta05', {
    title: 'Team Activity 05',
    path: '/ta05', // For pug, EJS
    activeTA05: true, // For HBS
    contentCSS: true, // For HBS
    counter: req.session.counter,
    style:req.session.style
  });
});


router.post("/changeStyle", (req, res, next) =>{

    req.session.style = req.body.styles;
    res.redirect('/ta05');

});

router.post("/reset", (req, res, next) =>{

        req.session.destroy(function (err) {
        res.redirect('/ta05'); //Inside a callback… bulletproof!
         });
      
   
});

module.exports = router;
