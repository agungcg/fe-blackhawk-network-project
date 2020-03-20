var express = require('express');
var router = express.Router();

var serviceLogin = require('../services/serviceLogin');

router.get('/', function(req, res, next) {
    res.render('login/login',{
        "titlePage" : "Login",
        messages: req.flash('info')
    });
});

router.post('/process/login',async function(req, res, next) {
    const user = await serviceLogin.logIn(req.body.inputEmailAddress, req.body.inputPassword)
    if (user.status == 200) {
        if (user.data.role_id == 1) {
            sess = req.session;
            sess.user = {
                user_id : user.data.user_id,
                name : user.data.name,
                role_id : user.data.role_id,
            }
            sess.token = {
                token : user.data.token,
            }
            res.redirect('/admin');
        } else {
            req.flash('info', 'nonAdmin')
            res.redirect('/');
        }
    } else if (user.status == 400 || user.status == 500) {
        req.flash('info', 'nonRegistered')
        res.redirect('/');
    }
});

router.get('/logout', async function(req, res, next) {
    req.session.destroy();
    res.redirect('/')
});

module.exports = router;
