'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        title: 'INTERFUG #2//2016',
        menu: [
            { url: '/', title: 'Home' },
            { url: '/kontakt', title: 'Kontakt' }
        ]
    });
});

router.get('/home', function(req, res) {
    res.render('home', {
        date: '27. & 28.08.2016'
    });
});

router.get('/kontakt', function(req, res) {
    res.render('kontakt', {});
});

module.exports = router;
