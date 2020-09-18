const express = require('express');
const router = express.Router();
const Tutor = require('../models/Tutor')

router.get("/", function(req, res, next) {
    console.log("yyy")
    Tutor.find(function(err, tutors) {
        if (err) {
            console.log('Error getting tutors');
        } else {
            res.json({tutors}
            );
            console.log(tutors);
        }
    })
});

module.exports = router;
