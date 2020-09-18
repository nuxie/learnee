const express = require('express');
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
require('../auth/auth');
const Tutor = require('../models/Tutor')

async function addTutor(n, d) {
    const tutor = new Tutor({
        name: n,
        description: '',
        lessons: []
    })
    const doc = await tutor.save();
}

router.post('/', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
    await addTutor(req.user.username).catch(error => { console.error(error) })
    console.log("added tutor")
    res.json({
        message : 'Signup successful',
        user : req.user
    });

});

module.exports = router;