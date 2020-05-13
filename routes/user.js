const express = require('express');
const router = express.Router();



//login
router.get('/login', (req, res) => {

    
    // res.send('login page')
    res.render('loginPage', {user: 'pritam', pass:'kajbsfkjakjsbfalsjf'});
});


router.post('/login', (req, res) => {
    // res.send('login page')
    res.render('loginPage', {});
});

  

//Register
router.get('/register', (req, res) => {
    // res.send('register')
    res.render('registerPage', {});
});


router.post('/register', (req, res) => {
    // res.send('register')
    res.render('registerPage', {});
});



module.exports = router;