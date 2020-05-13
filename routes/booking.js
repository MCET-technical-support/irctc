const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('booking')
    res.render('bookingPage');
});




module.exports = router;