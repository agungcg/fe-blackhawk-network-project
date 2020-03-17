var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // chart.render();
    res.render('admin/dashboard',{
        "titlePage" : "Dashboard",
    });
});

module.exports = router;
