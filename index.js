// importing 
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const passport = require('passport');

// defining POST constant
const PORT = process.env.PORT || 3000;
// import routes
const welcomeRouter = require('./routes/welcome');
const userRouter = require('./routes/user');
const bookingRouter = require('./routes/booking');

// db connection
mongoose.connect(
                    // 'mongodb://localhost:27017/rictc',     // for local db server
                    'mongodb+srv://mcet:mcet@123456789@cluster0-owus0.mongodb.net/test?retryWrites=true&w=majority',    // for cloud aws server
                     { 
                        useNewUrlParser: true, 
                        useUnifiedTopology: true
                    } 
                ).then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.error("X  MongoDB connection ERROR.... ", err));

const db = mongoose.connection;

db.on('error', (err) => console.error('X  getting error..', err));
db.once('open', () => console.log('DB Connection successfull!'));

// importent config
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

// body parser
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));


// using expresslayout
app.use(expressLayouts);


// Router or Path
app.use("/",welcomeRouter);
app.use("/user", userRouter);
app.use("/booking", bookingRouter);
app.use('/public', express.static('public'));

app.listen(PORT, console.log(`Server started on PORT: ${PORT}...`));        // one syntax -using variable in nodejs
// app.listen(PORT, console.log('Server started on PORT:',PORT,'...'));     // another syntax