const express = require('express');
const router = express.Router();

const Tutor = require('../models/Tutor')

async function runCode() {
  const tutor1 = new Tutor ({
    name: 'Ryu1',
    description: 'Shinku Hadoken',
    lessons: [{ subject: 'Math', price: 60 }]
  })
  const tutor2 = new Tutor ({
    name: 'Ryu2',
    description: 'Shinku Hadoken',
    lessons: [{ subject: 'Biology', price: '100' }]
  })

  const doc = await tutor1.save()
  console.log(doc)
  const doc2 = await tutor2.save()
  console.log(doc2)

  // returns first it finds
  console.log("Find one...")
  const ryu1 = await Tutor.findOne({ name: 'Ryu1' })
  console.log(ryu1)

  // returns an array - specified find
  const chars = await Tutor.find({ name: 'Ryu1' })
  console.log(chars)

  // returns everything - not specified find
  const chars_all = await Tutor.find()
  console.log(chars_all)

  // first way to update the entry
  // first, find it
  const ryu2 = await Tutor.findOne({ name: 'Ryu1' })
  console.log(ryu2)
  // then update it
  ryu2.lessons = [
    { subject: 'Math', price: 60 },
    { subject: 'Biology', price: 100}
  ]
  // after modifying, run save
  const doc3 = await ryu2.save()
  console.log(doc3)

  // second way to update the entry
  const doc4 = await Tutor.findOneAndUpdate(
      { name: 'Ryu2' },
      {
        lessons: [
          { subject: 'Math', price: 60 },
          { subject: 'Geo', price: 100}
        ]
      })
  console.log(doc4)

  const math = await Tutor.find({ "lessons.subject": "Math" })
  console.log("Teach Maths:")
  console.log(math)
  console.log(math[1]._id )

  const remove_math = await Tutor.updateOne({ '_id': math[1]._id },{"$pull": { "lessons": {"subject": "Math" }}})
  console.log(remove_math)

  const math2 = await Tutor.find({ "lessons.subject": "Math" })
  console.log("Teach Maths2:")
  console.log(math2)

  // first way to delete the entry
  const ryu3 = await Tutor.findOne({ name: 'Ryu1' })
  const deleted = await ryu3.remove()
  console.log(deleted)

  // second way to delete the entry
  const deleted2 = await Tutor.findOneAndDelete({ name: 'Ryu2' })
  console.log(deleted2)

}

runCode()
    .catch(error => { console.error(error) })


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
