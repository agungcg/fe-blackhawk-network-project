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
            "sideNavPath": "/admin/filter"
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

router.get('/cek', async function(req, res, next) {
const styles = {
    headerDark: {
      fill: {
        fgColor: {
          rgb: 'FF000000'
        }
      },
      font: {
        color: {
          rgb: 'FFFFFFFF'
        },
        sz: 14,
        bold: true,
        underline: true
      }
    },
    cellPink: {
      fill: {
        fgColor: {
          rgb: 'FFFFCCFF'
        }
      }
    },
    cellGreen: {
      fill: {
        fgColor: {
          rgb: 'FF00FF00'
        }
      }
    }
  };
   
  //Array of objects representing heading rows (very top)
  const heading = [
    [{value: 'a1', style: styles.headerDark}, {value: 'b1', style: styles.headerDark}, {value: 'c1', style: styles.headerDark}],
    ['a2', 'b2', 'c2'] // <-- It can be only values
  ];
   
  //Here you specify the export structure
  const specification = {
    customer_name: { // <- the key should match the actual data key
      displayName: 'Customer', // <- Here you specify the column header
      headerStyle: styles.headerDark, // <- Header style
      cellStyle: function(value, row) { // <- style renderer function
        // if the status is 1 then color in green else color in red
        // Notice how we use another cell value to style the current one
        return (row.status_id == 1) ? styles.cellGreen : {fill: {fgColor: {rgb: 'FFFF0000'}}}; // <- Inline cell style is possible 
      },
      width: 120 // <- width in pixels
    },
    status_id: {
      displayName: 'Status',
      headerStyle: styles.headerDark,
      cellFormat: function(value, row) { // <- Renderer function, you can access also any row.property
        return (value == 1) ? 'Active' : 'Inactive';
      },
      width: '10' // <- width in chars (when the number is passed as string)
    },
    note: {
      displayName: 'Description',
      headerStyle: styles.headerDark,
      cellStyle: styles.cellPink, // <- Cell style
      width: 220 // <- width in pixels
    }
  }
   
  // The data set should have the following shape (Array of Objects)
  // The order of the keys is irrelevant, it is also irrelevant if the
  // dataset contains more fields as the report is build based on the
  // specification provided above. But you should have all the fields
  // that are listed in the report specification
  const dataset = [
    {customer_name: 'IBM', status_id: 1, note: 'some note', misc: 'not shown'},
    {customer_name: 'HP', status_id: 0, note: 'some note'},
    {customer_name: 'MS', status_id: 0, note: 'some note', misc: 'not shown'}
  ]
   
  // Define an array of merges. 1-1 = A:1
  // The merges are independent of the data.
  // A merge will overwrite all data _not_ in the top-left cell.
  const merges = [
    { start: { row: 1, column: 1 }, end: { row: 1, column: 10 } },
    { start: { row: 2, column: 1 }, end: { row: 2, column: 5 } },
    { start: { row: 2, column: 6 }, end: { row: 2, column: 10 } }
  ]
   
  // Create the excel report.
  // This function will return Buffer
  const report = excel.buildExport(
    [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report
      {
        name: 'Report', // <- Specify sheet name (optional)
        heading: heading, // <- Raw heading array (optional)
        merges: merges, // <- Merge cell ranges
        specification: specification, // <- Report specification
        data: dataset // <-- Report data
      }
    ]
  );
   
  // You can then return this straight
  res.attachment('report.xlsx'); // This is sails.js specific (in general you need to set headers)
  return res.send(report);
});

module.exports = router;
