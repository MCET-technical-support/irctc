const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');


router.use(passport.initialize());
router.use(passport.session());




// // auth strategy
// var localStrategy = require('passport-local');
// passport.use(new localStrategy({ usernameField: username }, (username, password, done) =>
//     User.findOne({ username: email }, (err, data) => {
//         if (err) throw err;
//         if (!data) {
//             return done(null, false)
//         }
//         else {
//             bcrypt.compare(password, data.password, (err, macth) => {
//                 if (err) {
//                     return done(null, false);
//                 }
//                 if (!match) {
//                     return done(null, false);
//                 }
//                 if (match) {
//                     return done(null, data)
//                 }

//             })
//         }
//     })
// ));  

// passport.serializeUser((user, cb)=> {
//     cb(null, user.id)
// });

// passport.deserializeUser((user, cb) => {
//     user.findById(id, (err, user)=> {
//     cb(err, user.id)
//     })
// });


// end of auth strategy


// 



//login
router.get('/login', (req, res) => {
    // res.send('login page')
    res.render('loginPage')//, { email: email });
});



router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        failureRedirect: '/user/login',
        successRedirect: '/'
    })(req, res, next);
    res.render('loginPage');
});

  

//Register
router.get('/register', (req, res) => {

    // res.send('register')
    res.render('registerPage');
});


router.post('/register', (req, res) => {
    const email = req.body.email;
    const pass1 = req.body.password;
    const passCon = req.body.con_password;
    const username = req.body.username;
    const phone = req.body.phone;
    const dob = req.body.dob;
    var errors;
    // Checking fields--
    if (!username || !email || !phone || !dob || !pass1 || !passCon){
        var msg = 'Fill all the field!';
        errors =msg;
        console.log(msg);
        res.render('registerPage', { errors: errors, email: email, phone: phone })
    }
    // checking password match--
    if (pass1 !== passCon) {
        var msg = 'Password do not match!';
        errors=msg;
        console.log(msg);
        res.render('registerPage', { errors: errors, email: email, phone: phone })
    }
    // pass len
    if (pass1.length < 6) {
        var msg = 'Password must be atleast 6 charecter!';
        errors= msg;
        // console.log(msg);
        res.render('registerPage', { errors: errors, email: email, phone: phone })
    }
    if (typeof errors ==='undefined'){
        User.findOne({ email: email }, (err, data)=>{
            if (err) throw err;
            if (data) {
                errors = 'User already exist';
                res.render('registerPage', {errors: errors, email: email, phone: phone})
            }
            else{
                //hash pass
                bcrypt.genSalt(10, (err, salt)=> {
                    if (err) throw err;
                    bcrypt.hash(pass1, salt, (err, hash)=>{
                        if (err) throw err;
                        const passHash = hash;

                        User({
                            email: email,
                            username: username,
                            password: passHash,
                            phone: phone,
                            dob: dob
                        }).save((err, data)=>{
                            if (err) throw err;
                            console.log(data);
                            res.redirect('/user/login');
                        });
                    });
                } );     
            }
        })
    }
})






router.get('/logout', (req, res) => {
    // res.send('login page')
    // console.log(email)
    // var password =  
    res.render('loginPage');
});


router.get('/forgot-password', (req, res) => {
    // res.send('login page')
    // console.log(email)
    // var password =  
    res.render('forgotPass');
});



router.get('/forogt-password/sent', (req, res) => {
    // res.send('login page')
    // console.log(email)
    // var password =  
    res.render('forgotSent');
});



module.exports = router;