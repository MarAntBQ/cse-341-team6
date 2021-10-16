const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const Informations = require('./models/jsonReader');

app.get('/', (req, res, next) => {
    Informations.fetchAll((informations) => {
        res.render('home', {
            lists: informations,
            pageTitle: 'Home',
            path: '/'
        });
    });
});

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not Found!'});
});

app.listen(3000);