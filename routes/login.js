var express = require('express');
var router = express.Router();

var page = "Login";

router.get('/', function(req, res, next) {
    res.render('login/login',{
        "titlePage" : page
    });
});

router.post('/process/login', function(req, res, next) {
    res.redirect('/admin')
});

module.exports = router;
