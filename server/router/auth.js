const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(
    new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_callbackURL,
  },
  async function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
  }
));


// Google Login Route
router.get('/auth/google',
  passport.authenticate('google', { scope: ['email','profile'] }));


// retrieve users data
// retrieve users data
router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login-failure',
    successRedirect:'/dashboard'
}),
);

// When something goes wrong with goggle-authentication

router.get('/login-failure',(req, res)=>{
    res.send('Something Went Wrong')
})

module.exports = router;