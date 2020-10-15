var express = require('express');
var router = express.Router();
const excel = require('node-excel-export');

var serviceAdmin = require('../services/serviceAdmin');
var consConfig = require("../configs/constants");
var serviceGlobal = require('../services/serviceGlobal');

var date = new Date();

router.get('/', async function (req, res, next) {
    sess = req.session;
    if (sess.token) {
        const monthNow = date.getMonth() + 1;
        const dashboard = await serviceAdmin.getDashboard(sess.token, monthNow)
        const file = await serviceAdmin.getFile(sess.token)
        const month = await serviceGlobal.getAllSelectMonth()
        const brand = await serviceGlobal.getAllSelectBrand()
        const fixtureType = await serviceGlobal.getAllSelectFixtureType(sess.token)
        const store = await serviceGlobal.getAllSelectStore(sess.token)
        const dc = await serviceGlobal.getAllSelectDC(sess.token)
        const md = await serviceGlobal.getAllSelectMD(sess.token)
        const retailer = await serviceGlobal.getAllSelectRetailer(sess.token)
        res.render('admin/dashboard', {
            "titlePage": "Dashboard",
            "month": monthNow,
            "dashboard": dashboard,
            "brand": '',
            "retailer": '',
            "fixture": '',
            "store": '',
            "dc": '',
            "md": '',
            "sideNavPath": "/admin/filter",
            "domain": consConfig.urlService,
            "file": file,
            "token": sess.token,
            "sidenav": {
                month: month,
                brand: brand,
                fixtureType: fixtureType,
                store: store,
                dc: dc,
                md: md,
                retailer: retailer
            }
        });
    } else {
        res.redirect('/')
    }
});

router.use('/filter', async function (req, res, next) {
    sess = req.session;
    if (sess.token) {
        const dashboard = await serviceAdmin.getDashboard(sess.token, req.body.selectMonth, req.body.selectBrand, req.body.selectRetailer, req.body.selectFixtureType, req.body.selectStore, req.body.selectDC, req.body.selectMD)
        const file = await serviceAdmin.getFile(sess.token)
        const month = await serviceGlobal.getAllSelectMonth()
        const brand = await serviceGlobal.getAllSelectBrand()
        const fixtureType = await serviceGlobal.getAllSelectFixtureType(sess.token)
        const store = await serviceGlobal.getAllSelectStore(sess.token)
        const dc = await serviceGlobal.getAllSelectDC(sess.token)
        const md = await serviceGlobal.getAllSelectMD(sess.token)
        const retailer = await serviceGlobal.getAllSelectRetailer(sess.token)
        res.render('admin/dashboard', {
            "titlePage": "Dashboard",
            "month": req.body.selectMonth,
            "dashboard": dashboard,
            "brand": req.body.selectBrand,
            "retailer": req.body.selectRetailer,
            "fixture": req.body.selectFixtureType,
            "store": req.body.selectStore,
            "dc": req.body.selectDC,
            "md": req.body.selectMD,
            "sideNavPath": "/admin/filter",
            "domain": consConfig.urlService,
            "file": file,
            "token": sess.token,
            "sidenav": {
                month: month,
                brand: brand,
                fixtureType: fixtureType,
                store: store,
                dc: dc,
                md: md,
                retailer: retailer
            }
        });
    } else {
        res.redirect('/')
    }
});

router.use('/detail', async function (req, res, next) {
    sess = req.session;
    if (sess.token && req.body.btnDetail != undefined) {
        const detail = await serviceAdmin.getDetail(sess.token, req.body.selectMonth, req.body.selectBrand, req.body.selectRetailer, req.body.selectFixtureType, req.body.selectStore, req.body.selectDC, req.body.selectMD, req.body.btnDetail)
        const month = await serviceGlobal.getAllSelectMonth()
        const brand = await serviceGlobal.getAllSelectBrand()
        const fixtureType = await serviceGlobal.getAllSelectFixtureType(sess.token)
        const store = await serviceGlobal.getAllSelectStore(sess.token)
        const dc = await serviceGlobal.getAllSelectDC(sess.token)
        const md = await serviceGlobal.getAllSelectMD(sess.token)
        const retailer = await serviceGlobal.getAllSelectRetailer(sess.token)
        res.render('admin/detail', {
            "titlePage": "Detail Diagram",
            "month": req.body.selectMonth,
            "detail": detail,
            "brand": req.body.selectBrand,
            "retailer": req.body.selectRetailer,
            "fixture": req.body.selectFixtureType,
            "store": req.body.selectStore,
            "dc": req.body.selectDC,
            "md": req.body.selectMD,
            "sideNavPath": "/admin/detail/filter",
            "domain": consConfig.urlService,
            "token": sess.token,
            "sidenav": {
                month: month,
                brand: brand,
                fixtureType: fixtureType,
                store: store,
                dc: dc,
                md: md,
                retailer: retailer
            },
            "trigger": req.body.btnDetail
        });
    } else {
        res.redirect('/admin')
    }
});

router.use('/detail/filter', async function (req, res, next) {
    sess = req.session;
    console.log("asuuu", req.body.btnDetail)
    if (sess.token && req.body.btnDetail != undefined) {
        const detail = await serviceAdmin.getDetail(sess.token, req.body.selectMonth, req.body.selectBrand, req.body.selectRetailer, req.body.selectFixtureType, req.body.selectStore, req.body.selectDC, req.body.selectMD, req.body.btnDetail)
        const month = await serviceGlobal.getAllSelectMonth()
        const brand = await serviceGlobal.getAllSelectBrand()
        const fixtureType = await serviceGlobal.getAllSelectFixtureType(sess.token)
        const store = await serviceGlobal.getAllSelectStore(sess.token)
        const dc = await serviceGlobal.getAllSelectDC(sess.token)
        const md = await serviceGlobal.getAllSelectMD(sess.token)
        const retailer = await serviceGlobal.getAllSelectRetailer(sess.token)
        res.render('admin/detail', {
            "titlePage": "Detail Diagram",
            "month": req.body.selectMonth,
            "detail": detail,
            "brand": req.body.selectBrand,
            "retailer": req.body.selectRetailer,
            "fixture": req.body.selectFixtureType,
            "store": req.body.selectStore,
            "dc": req.body.selectDC,
            "md": req.body.selectMD,
            "sideNavPath": "/admin/detail/filter",
            "domain": consConfig.urlService,
            "token": sess.token,
            "sidenav": {
                month: month,
                brand: brand,
                fixtureType: fixtureType,
                store: store,
                dc: dc,
                md: md,
                retailer: retailer
            },
            "trigger": req.body.btnDetail
        });
    } else {
        res.redirect('/admin')
    }
});

router.get('/gallery', async function (req, res, next) {
    sess = req.session;
    if (sess.token) {
        const monthNow = date.getMonth() + 1;
        console.log(req.query.month, req.query.page)
        const gallery = await serviceAdmin.getGallery(sess.token, typeof req.query.month != "undefined" ? req.query.month : monthNow, typeof req.query.page != "undefined" ? req.query.page : 1)
        const month = await serviceGlobal.getAllSelectMonth()
        const brand = await serviceGlobal.getAllSelectBrand()
        const fixtureType = await serviceGlobal.getAllSelectFixtureType(sess.token)
        const store = await serviceGlobal.getAllSelectStore(sess.token)
        const dc = await serviceGlobal.getAllSelectDC(sess.token)
        const md = await serviceGlobal.getAllSelectMD(sess.token)
        const retailer = await serviceGlobal.getAllSelectRetailer(sess.token)
        res.render('admin/gallery', {
            "titlePage": "Gallery",
            "month": monthNow,
            "gallery": gallery,
            "brand": '',
            "retailer": '',
            "fixture": '',
            "store": '',
            "dc": '',
            "md": '',
            "sideNavPath": "/admin/gallery/filter",
            "domain": consConfig.urlService,
            "sidenav": {
                month: month,
                brand: brand,
                fixtureType: fixtureType,
                store: store,
                dc: dc,
                md: md,
                retailer: retailer
            }
        });
    } else {
        res.redirect('/')
    }
});

router.use('/gallery/filter', async function (req, res, next) {
    sess = req.session;
    if (sess.token) {
        const gallery = await serviceAdmin.getGallery(sess.token, typeof req.body.selectMonth != "undefined" ? req.body.selectMonth : req.query.month, typeof req.query.page != "undefined" ? req.query.page : 1, typeof req.body.selectBrand != "undefined" ? req.body.selectBrand : req.query.brand, typeof req.body.selectRetailer != "undefined" ? req.body.selectRetailer : req.query.retailer, typeof req.body.selectFixtureType != "undefined" ? req.body.selectFixtureType : req.query.fixture,typeof req.body.selectStore != "undefined" ? req.body.selectStore : req.query.store, typeof req.body.selectDC != "undefined" ? req.body.selectDC : req.query.dc, typeof req.body.selectMD != "undefined" ? req.body.selectMD : req.query.md)
        const month = await serviceGlobal.getAllSelectMonth()
        const brand = await serviceGlobal.getAllSelectBrand()
        const fixtureType = await serviceGlobal.getAllSelectFixtureType(sess.token)
        const store = await serviceGlobal.getAllSelectStore(sess.token)
        const dc = await serviceGlobal.getAllSelectDC(sess.token)
        const md = await serviceGlobal.getAllSelectMD(sess.token)
        const retailer = await serviceGlobal.getAllSelectRetailer(sess.token)
        console.log(req.body.selectMonth, req.body.selectBrand)
        res.render('admin/gallery', {
            "titlePage": "Gallery",
            "month": typeof req.body.selectMonth != "undefined" ? req.body.selectMonth : req.query.month,
            "gallery": gallery,
            "brand": typeof req.body.selectBrand != "undefined" ? req.body.selectBrand : req.query.brand,
            "retailer": typeof req.body.selectRetailer != "undefined" ? req.body.selectRetailer : req.query.retailer,
            "fixture": typeof req.body.selectFixtureType != "undefined" ? req.body.selectFixtureType : req.query.fixture,
            "store": typeof req.body.selectStore != "undefined" ? req.body.selectStore : req.query.store,
            "dc": typeof req.body.selectDC != "undefined" ? req.body.selectDC : req.query.dc,
            "md": typeof req.body.selectMD != "undefined" ? req.body.selectMD : req.query.md,
            "sideNavPath": "/admin/gallery/filter",
            "domain": consConfig.urlService,
            "sidenav": {
                month: month,
                brand: brand,
                fixtureType: fixtureType,
                store: store,
                dc: dc,
                md: md,
                retailer: retailer
            },
        });
    } else {
        res.redirect('/')
    }
});

router.get('/md', async function (req, res, next) {
    sess = req.session;
    if (sess.token) {
        const user = await serviceAdmin.findAllUser(sess.token)
        res.render('admin/md', {
            "titlePage": "MD",
            "user": user
        });
    } else {
        res.redirect('/')
    }
});

router.post('/md/process/delete/:id', async function (req, res, next) {
    sess = req.session;
    const status = await serviceAdmin.deleteUser(sess.token, req.params.id)
    if (status.message === "Success") {
        res.json(status)
    } else {
        const status = ''
        res.json(status)
    }
});

router.post('/md/process/edit/:id', async function (req, res, next) {
    sess = req.session;
    const status = await serviceAdmin.editUser(sess.token, req.params.id, req.body.password)
    if (status.message === "Success") {
        res.json(status)
    } else {
        const status = ''
        res.json(status)
    }
});

router.post('/md/process/add', async function (req, res, next) {
    sess = req.session;
    if (req.body.nik && req.body.name && req.body.email && req.body.password) {
        const statusSuccess = await serviceAdmin.signup(sess.token, req.body.nik, req.body.name, req.body.email, req.body.password, "2")
        res.json(statusSuccess)
    } else {
        const status = ''
        res.json(status)
    }
});

router.get('/report', async function (req, res, next) {
    sess = req.session;
    if (sess.token) {
        res.render('admin/report', {
            "titlePage": "Report",
        });
    } else {
        res.redirect('/')
    }
});

router.post('/report/process/export-excel', async function (req, res, next) {
    sess = req.session;
    const dataReport = await serviceAdmin.getReport(sess.token, req.body.radioFilter, req.body.inputDate)

    const styles = {
        headerPrimary: {
            fill: {
                fgColor: {
                    rgb: '007bff'
                }
            },
            font: {
                color: {
                    rgb: 'ffffff'
                },
                sz: 14
            }
        },
    };

    const heading = [
        ['Report ' + req.body.radioFilter + ' ' + req.body.inputDate, ' ']
    ];

    const specification = {}
    for (var k in dataReport.data[0]) {
        specification[k] = {
            displayName: k,
            headerStyle: styles.headerPrimary,
            width: 120
        }
    }

    const merges = [
        { start: { row: 1, column: 1 }, end: { row: 1, column: 5 } }
    ]

    const report = excel.buildExport(
        [
            {
                name: req.body.radioFilter + '-' + req.body.inputDate,
                heading: heading,
                merges: merges,
                specification: specification,
                data: dataReport.data
            }
        ]
    );

    res.attachment(req.body.radioFilter + '-' + req.body.inputDate + '.xlsx');
    return res.send(report);
});

module.exports = router;
