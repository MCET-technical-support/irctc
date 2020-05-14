const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('booking')
    res.render('bookingPage', {user:'pritam'});
});




module.exports = router;