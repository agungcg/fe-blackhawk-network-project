var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // chart.render();
    res.render('admin/dashboard',{
        "titlePage" : "Dashboard",
    });
});

router.get('/md', function(req, res, next) {
    // chart.render();
    res.render('admin/md',{
        "titlePage" : "MD",
    });
});

module.exports = router;
