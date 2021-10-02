const path = require('path');

const jsonReader = require('./models/jsonReader');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    jsonReader.fetchAll((data) => {
        res.render('index', {
            lists: data,
            pageTitle: 'Home',
            path: '/'
        });
    });
});

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not Found!'});
});

app.listen(3000);