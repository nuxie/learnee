const express = require('express');
const router = express.Router();
const passport = require("passport");
const User = require('../models/User')

router.get('/', function(req, res) {
    req.logout();
    res.json({message: "Success!"});
});

module.exports = router;