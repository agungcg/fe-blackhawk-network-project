var express = require('express');
var router = express.Router();

var serviceAdmin = require('../services/serviceAdmin');

var date = new Date();

router.get('/', function(req, res, next) {
    const month = date.getMonth() + 1;
    sess = req.session;
    if (sess.token){
        res.render('admin/dashboard',{
            "titlePage" : "Dashboard",
            "month" : month
        });
    } else {
        res.redirect('/')
    }
});

router.get('/md', function(req, res, next) {
    sess = req.session;
    if (sess.token){
        res.render('admin/md',{
            "titlePage" : "MD",
        });
    } else {
        res.redirect('/')
    }
});

module.exports = router;
