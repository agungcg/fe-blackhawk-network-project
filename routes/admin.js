var express = require('express');
var router = express.Router();

var serviceAdmin = require('../services/serviceAdmin');

var date = new Date();

router.get('/', async function(req, res, next) {
    sess = req.session;
    if (sess.token){
        const month = date.getMonth() + 1;
        const dashboard = await serviceAdmin.getDashboard(sess.token, month)
        res.render('admin/dashboard',{
            "titlePage" : "Dashboard",
            "month" : month,
            "dashboard" : dashboard,
            "brand": '',
            "retailer": '',
            "fixture": '',
            "store": '',
            "dc": '',
            "md": ''
        });
    } else {
        res.redirect('/')
    }
});

router.use('/filter', async function(req, res, next) {
    sess = req.session;
    if (sess.token){
        const dashboard = await serviceAdmin.getDashboard(sess.token, req.body.selectMonth, req.body.selectBrand, req.body.selectRetailer, req.body.selectFixtureType, req.body.selectStore, req.body.selectDC, req.body.selectMD)
        res.render('admin/dashboard',{
            "titlePage" : "Dashboard",
            "month" : req.body.selectMonth,
            "dashboard" : dashboard,
            "brand": req.body.selectBrand,
            "retailer": req.body.selectRetailer,
            "fixture": req.body.selectFixtureType,
            "store": req.body.selectStore,
            "dc": req.body.selectDC,
            "md": req.body.selectMD
        });
    } else {
        res.redirect('/')
    }
});

router.get('/md', async function(req, res, next) {
    sess = req.session;
    if (sess.token){
        const user = await serviceAdmin.findAllUser(sess.token)
        res.render('admin/md',{
            "titlePage" : "MD",
            "user" : user
        });
    } else {
        res.redirect('/')
    }
});

router.post('/md/process/delete/:id', async function(req, res, next) {
    sess = req.session;
    const status = await serviceAdmin.deleteUser(sess.token, req.params.id)
    if (status.message === "Success") {
        res.json(status)
    } else {
        const status = ''
        res.json(status)
    } 
});

router.post('/md/process/edit/:id', async function(req, res, next) {
    sess = req.session;
    console.log("id", req.params.id)
    console.log("pass", req.body.password)
    var dataUser = {
        password: req.body.password
    }
    const status = await serviceAdmin.editUser(sess.token, req.params.id, dataUser)
    console.log("status edit", status)
    res.json("cek aja")
});

router.post('/md/process/add', async function(req, res, next) {
    sess = req.session;
    if (req.body.nik && req.body.name && req.body.email && req.body.password) {
        const statusSuccess = await serviceAdmin.signup(sess.token, req.body.nik, req.body.name, req.body.email, req.body.password, "2")
        res.json(statusSuccess)
    } else {
        const status = ''
        res.json(status)
    }
});

module.exports = router;
