const express = require('express');
const router = express.Router();
const passport = require("passport");
const User = require('../models/User')
const jwt = require("jsonwebtoken");
require('../auth/auth');

router.post('/', async (req, res, next) => {
    passport.authenticate('signin', async (err, user, info) => {
        try {
            if(err || !user){
                const error = new Error('An Error occurred')
                return next(error);
            }
            req.login(user, { session : false }, async (error) => {
                if( error ) return next(error)
                // we don't want to store the sensitive information such as the
                // user password in the token so we pick only the email and id
                const body = { _id : user._id, username : user.username };
                // sign the JWT token and populate the payload with the user email and id
                const token = jwt.sign({ user : body },'cQ79PaY0K/ScHa3cb7glfej3m7g1QdnKvzql8JUJox9cAYNzmTsgsox7AZ6SlgGy8EDIls4Zpw');
                // send back the token to the user
                return res.json({ token: 'JWT ' + token, user});
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);

});



module.exports = router;