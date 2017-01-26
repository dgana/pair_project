var express = require('express');
var router = express.Router();
let db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/main', function(req, res, next) {
  res.render('main');
});

router.post('/className', function(req, res, next) {
  if (req.body.job === "Swordman") {
    db.Players.create({
      name: req.body.job,
      job: string,
      strength: 10,
      constitution: 10,
      intelligence: 5,
      spirit: 5,
      dexterity: 5
    })
  } else if (req.body.job === "Wizard") {
    db.Players.create({
      name: req.body.job,
      job: string,
      strength: 10,
      constitution: 10,
      intelligence: 5,
      spirit: 5,
      dexterity: 5
    })
  } else if (req.body.job === "Archer") {
    db.Players.create({
      name: req.body.job,
      job: string,
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

// router.get('/todos', function(req, res, next) {
//   models.Todo.findAll({raw: true}).then(function(todos){
//     res.json(todos);
//   })
// });
//
// router.post('/todos/add', function(req, res, next) {
//   models.Todo.create({title: req.body.title, completed: false}).then(function(todo){
//     res.json(todo);
//   })
// });

module.exports = router;
