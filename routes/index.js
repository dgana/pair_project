var express = require('express');
var router = express.Router();
let db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/main', function(req, res, next) {
  db.Players.findAll().then(function (find) {
    res.render('main', {user: find[find.length-1]});
  })
});

// router.post('/reset', function(req, res, next) {
//   db.Players.findAll().then(function (find) {
//     res.render('main', {user: find[find.length-1]});
//   })
// });

router.post('/className', function(req, res, next) {
  if (req.body.job === "Swordsman") {
    db.Players.create({
      job: req.body.job,
      strength: 10,
      constitution: 10,
      intelligence: 5,
      spirit: 5,
      dexterity: 5
    }).then(function () {
      res.redirect('/main');
    })
  } else if (req.body.job === "Wizard") {
    db.Players.create({
      job: req.body.job,
      strength: 5,
      constitution: 5,
      intelligence: 10,
      spirit: 10,
      dexterity: 5
    }).then(function () {
      res.redirect('/main');
    })
  } else if (req.body.job === "Archer") {
    db.Players.create({
      job: req.body.job,
      strength: 10,
      constitution: 5,
      intelligence: 5,
      spirit: 5,
      dexterity: 10
    }).then(function () {
      res.redirect('/main');
    })
  }
});

router.post('/up_status', function(req, res, next) {
  db.Players.findById(54).then(function (find) {
    find.update({
      strength: req.body.up_str
    }).then(function(data){
      res.json(data)
    })
  })
});
//
// router.post('/todos/add', function(req, res, next) {
//   models.Todo.create({title: req.body.title, completed: false}).then(function(todo){
//     res.json(todo);
//   })
// });

module.exports = router;
