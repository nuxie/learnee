const express = require('express');

const router = express.Router();
require('../auth/auth');
const Tutor = require('../models/Tutor')

// we want only authorized users to have access

async function updateTutor(n, d) {
    const tutor = await Tutor.findOne({name: n})
    // then update it
    tutor.description = d
    // tutor.lessons = [
    //     {subject: 'Math', price: 60},
    //     {subject: 'Biology', price: 100}
    // ]
    // after modifying, run save
    const doc3 = await tutor.save()
    console.log(doc3)
}

async function getTutor(n) {
    let t = Tutor.findOne({name: n});
    console.log("tutor from get tutor");
    console.log(t);
    return t;
}

router.get('/', async (req, res, next) => {
    console.log("yyy")
    Tutor.findOne({name: req.user.user['username']}, function(err, tutor){
        if (err) {
            console.log('Error getting the tutor');
        } else {
            res.json({
                tutor
                }
            );
            console.log(tutor);
        }
    })
    // res.json({
    //     message : 'You made it to the secure route',
    //     user : req.user,
    //     tutor: Tutor.findOne({name: req.user.username}),
    //     token : req.headers.Authorization
    // })
});

// displays information tailored according to the logged in user
router.post('/update', async (req, res, next) => {
    // we'll just send back the user details and the token
    console.log(req)
    console.log(req.body)

    Tutor.findOne({name: req.user.user['username']}, function (err, tutor) {
        if (err) {
            console.log('Error getting the tutor');
        } else {
            console.log(req.body)
            tutor.description = req.body.description
            tutor.save()
            console.log(tutor);
            res.json({
                message: 'Successfully updated the description',
                user: req.user,
                token: req.headers.Authorization
            })
        }
    });
})

router.post('/addLesson', async (req, res, next) => {
    // we'll just send back the user details and the token
    console.log(req.body)
    Tutor.findOne({name: req.user.user['username']}, function (err, tutor) {
        if (err) {
            console.log('Error getting the tutor');
        } else {
            console.log(req.body)
            if (tutor !== null) {
                tutor.lessons.push(req.body.lesson)
                tutor.save()
                console.log(tutor);
            }
            res.json({
                message: 'Successfully added the lesson',
                user: req.user,
                token: req.headers.Authorization
            })
        }
    });
})
// const remove_math = await Tutor.updateOne({ '_id': math[1]._id },{"$pull": { "lessons": {"subject": "Math" }}})
// console.log(remove_math)
router.delete('/removeLesson', async (req, res, next) => {
    Tutor.updateOne({ name: req.user.user['username'] },{"$pull": { "lessons": {"subject": req.query.subject }}}, function (err, tutor) {
        if (err) {
            console.log('Error getting the tutor');
        } else {
            console.log(tutor)
            res.json({
                message: 'Successfully removed the lesson',
                user: req.user,
                token: req.headers.Authorization
            })
        }
    });
})

module.exports = router;