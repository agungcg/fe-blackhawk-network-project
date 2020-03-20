var express = require('express');
var router = express.Router();

var serviceGlobal = require('../services/serviceGlobal');

router.get('/get-select-sidenav', async function(req, res, next) {
    const temp = []
    sess = req.session
    const month = await serviceGlobal.getAllSelectMonth()
    const brand = await serviceGlobal.getAllSelectBrand()
    const fixtureType = await serviceGlobal.getAllSelectFixtureType(sess.token)
    const store = await serviceGlobal.getAllSelectStore(sess.token)
    const dc = await serviceGlobal.getAllSelectDC(sess.token)
    const md = await serviceGlobal.getAllSelectMD(sess.token)
    temp.push({month : month}, {brand : brand}, {fixtureType : fixtureType}, {store : store}, {dc : dc}, {md : md})
    res.json(temp);
});

module.exports = router;
