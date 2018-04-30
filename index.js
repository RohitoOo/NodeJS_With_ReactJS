const express = require ('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require ('./models/User')
require ('./services/passport')


mongoose.connect(keys.mongoURI)

const app = express();


// max age passed in milliseconds
app.use(cookieSession({
maxAge: 30 * 24 * 60 * 60 * 1000,
keys: [keys.cookieKey]

})
);


app.use(passport.initialize());
app.use(passport.session());

app.get('/' , function (req, res){

res.send('YoooHooo!')

})

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000
app.listen(PORT, function(){
  console.log("Listening on Port 5000")
});



// Google Oauth Link Breakdown

//https://accounts.google.com/o/oauth2/v2/auth?response_type=code&
//redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&
//scope=profile%20email&
//client_id=72836613325-ad2j4ooj9opj6n7lt79lv1jd6h3qahcp.apps.googleusercontent.com
