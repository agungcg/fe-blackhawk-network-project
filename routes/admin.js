var express = require('express');
var router = express.Router();
const excel = require('node-excel-export');

var serviceAdmin = require('../services/serviceAdmin');
var consConfig = require("../configs/constants");

var date = new Date();

router.get('/', async function(req, res, next) {
    sess = req.session;
    if (sess.token){
        const month = date.getMonth() + 1;
        const dashboard = await serviceAdmin.getDashboard(sess.token, month)
        const file = await serviceAdmin.getFile(sess.token)
        res.render('admin/dashboard',{
            "titlePage" : "Dashboard",
            "month" : month,
            "dashboard" : dashboard,
            "brand": '',
            "retailer": '',
            "fixture": '',
            "store": '',
            "dc": '',
            "md": '',
            "sideNavPath": "/admin/filter",
            "domain": consConfig.urlService,
            "file": file,
            "token": sess.token
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
            "md": req.body.selectMD,
            "sideNavPath": "/admin/filter"
        });
    } else {
        res.redirect('/')
    }
});

router.get('/gallery', async function(req, res, next) {
    sess = req.session;
    if (sess.token){
        const month = date.getMonth() + 1;
        const gallery = await serviceAdmin.getGallery(sess.token, month)
        res.render('admin/gallery',{
            "titlePage" : "Gallery",
            "month" : month,
            "gallery" : gallery,
            "brand": '',
            "retailer": '',
            "fixture": '',
            "store": '',
            "dc": '',
            "md": '',
            "sideNavPath": "/admin/gallery/filter",
            "domain": consConfig.urlService
        });
    } else {
        res.redirect('/')
    }
});

router.use('/gallery/filter', async function(req, res, next) {
    sess = req.session;
    if (sess.token){
        const gallery = await serviceAdmin.getGallery(sess.token, req.body.selectMonth, req.body.selectBrand, req.body.selectRetailer, req.body.selectFixtureType, req.body.selectStore, req.body.selectDC, req.body.selectMD)
        res.render('admin/gallery',{
            "titlePage" : "Gallery",
            "month" : req.body.selectMonth,
            "gallery" : gallery,
            "brand": req.body.selectBrand,
            "retailer": req.body.selectRetailer,
            "fixture": req.body.selectFixtureType,
            "store": req.body.selectStore,
            "dc": req.body.selectDC,
            "md": req.body.selectMD,
            "sideNavPath": "/admin/gallery/filter",
            "domain": consConfig.urlService
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
    const status = await serviceAdmin.editUser(sess.token, req.params.id, req.body.password)
    if (status.message === "Success") {
        res.json(status)
    } else {
        const status = ''
        res.json(status)
    }
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

router.get('/report', async function(req, res, next) {
  sess = req.session;
  if (sess.token){
      res.render('admin/report',{
          "titlePage" : "Report",
      });
  } else {
      res.redirect('/')
  }
});

router.post('/report/process/export-excel', async function(req, res, next) {
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
  for(var k in dataReport.data[0]){ 
    specification[k] =  {
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
