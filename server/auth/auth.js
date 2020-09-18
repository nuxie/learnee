const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/User');

// create a passport middleware to handle user registration
passport.use('signup', new localStrategy({
    usernameField : 'username',
    passwordField : 'password'
}, async (username, password, done) => {
    try {
        console.log("X1");
        // save the information provided by the user to the the database
        const user = await User.create({ username, password });
        // send the user information to the next middleware
        return done(null, user);
    } catch (error) {
        console.log("X2");
        done(error);
    }
}));

// create a passport middleware to handle User singin
passport.use('signin', new localStrategy({
    usernameField : 'username',
    passwordField : 'password'
}, async (username, password, done) => {
    try {
        console.log("x3");
        // find the user associated with the username provided by the user
        const user = await User.findOne({ username });
        if(!user) {
            // if the user isn't found in the database, return a message
            return done(null, false, { message : 'User not found'});
        }
        // validate password and make sure it matches with the corresponding hash stored in the database
        // if the passwords match, it returns a value of true.
        const validate = await user.isValidPassword(password);
        if(!validate){
            return done(null, false, { message : 'Wrong Password'});
        }
        // send the user information to the next middleware
        return done(null, user, { message : 'Logged in Successfully'});
    } catch (error) {
        console.log("x4");
        return done(error);
    }
}));

const JWTstrategy = require('passport-jwt').Strategy;
// we use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt;

// this verifies that the token sent by the user is valid
passport.use(new JWTstrategy({
    // secret we used to sign our JWT
    secretOrKey : 'cQ79PaY0K/ScHa3cb7glfej3m7g1QdnKvzql8JUJox9cAYNzmTsgsox7AZ6SlgGy8EDIls4Zpw',
    // we expect the user to send the token in header with the name 'secret_token'
    jwtFromRequest : ExtractJWT.fromAuthHeaderWithScheme('JWT')
}, async (token, done) => {
    console.log("xxx")
    try {
        console.log("x5");
        // pass the user details to the next middleware
        return done(null, token);
    } catch (error) {
        console.log("x6");
        done(error);
    }
}));




