var express = require('express');
var router = express.Router();

var serviceGlobal = require('../services/serviceGlobal');

router.get('/get-select-sidenav', async function(req, res, next) {
    sess = req.session
    if (sess.token){
        const temp = []
        const month = await serviceGlobal.getAllSelectMonth()
        const brand = await serviceGlobal.getAllSelectBrand()
        const fixtureType = await serviceGlobal.getAllSelectFixtureType(sess.token)
        const store = await serviceGlobal.getAllSelectStore(sess.token)
        const dc = await serviceGlobal.getAllSelectDC(sess.token)
        const md = await serviceGlobal.getAllSelectMD(sess.token)
        const retailer = await serviceGlobal.getAllSelectRetailer(sess.token)
        temp.push({month : month}, {brand : brand}, {fixtureType : fixtureType}, {store : store}, {dc : dc}, {md : md}, {retailer : retailer})
        res.json(temp);
    } else {
        res.redirect('/')
    }
});

router.post('/download-pop', async function(req, res, next) {
    if (req.body) {
        console.log(req.body.data)
        console.log(Object.values(req.body))
        res.send("ok")
    }
});

module.exports = router;
