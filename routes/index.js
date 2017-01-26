var express = require('express');
var router = express.Router();
let db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/main', function(req, res, next) {
  db.Players.findAll().then(function (find) {
    res.render('main', {user: find[find.length-1], start_job: req.query.job});
  })
});

router.post('/reset', function(req, res, next) {
  db.Players.findAll({raw:true}).then(function (allPlayers) {
    db.Players.findById(allPlayers[allPlayers.length-1].id).then(function (find) {
      if (req.session.class_pick === "Swordsman") {
        find.update({
          job: req.session.class_pick,
          strength: 10,
          constitution: 10,
          intelligence: 5,
          spirit: 5,
          dexterity: 5,
          level: 1
        }).then(function(data){
          res.redirect('/main')
        })
      } else if (req.session.class_pick === "Wizard") {
        find.update({
          job: req.session.class_pick,
          strength: 5,
          constitution: 5,
          intelligence: 10,
          spirit: 10,
          dexterity: 5,
          level: 1
        }).then(function(data){
          res.redirect('/main')
        })
      } else if (req.session.class_pick === "Archer") {
        find.update({
          job: req.session.class_pick,
          strength: 10,
          constitution: 5,
          intelligence: 5,
          spirit: 5,
          dexterity: 10,
          level: 1
        }).then(function(data){
          res.redirect('/main')
        })
      }
    })
  })
});

router.post('/className', function(req, res, next) {
  req.session.class_pick = req.body.job;
  if (req.body.job === "Swordsman") {
    db.Players.create({
      job: req.body.job,
      strength: 10,
      constitution: 10,
      intelligence: 5,
      spirit: 5,
      dexterity: 5,
      level: 1
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
      dexterity: 5,
      level: 1
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
      dexterity: 10,
      level: 1
    }).then(function () {
      res.redirect('/main');
    })
  }
});

router.post('/up_str', function(req, res, next) {
  db.Players.findAll({raw:true}).then(function (allPlayers) {
    db.Players.findById(allPlayers[allPlayers.length-1].id).then(function (find) {
      find.update({
        strength: req.body.up_str,
        level: req.body.up_lvl
      }).then(function(data){
        res.json(data)
      })
    })
  })
});

router.post('/up_con', function(req, res, next) {
  db.Players.findAll({raw:true}).then(function (allPlayers) {
    db.Players.findById(allPlayers[allPlayers.length-1].id).then(function (find) {
      find.update({
        constitution: req.body.up_con,
        level: req.body.up_lvl
      }).then(function(data){
        res.json(data)
      })
    })
  })
});

router.post('/up_int', function(req, res, next) {
  db.Players.findAll({raw:true}).then(function (allPlayers) {
    db.Players.findById(allPlayers[allPlayers.length-1].id).then(function (find) {
      find.update({
        intelligence: req.body.up_int,
        level: req.body.up_lvl
      }).then(function(data){
        res.json(data)
      })
    })
  })
});

router.post('/up_spr', function(req, res, next) {
  db.Players.findAll({raw:true}).then(function (allPlayers) {
    db.Players.findById(allPlayers[allPlayers.length-1].id).then(function (find) {
      find.update({
        spirit: req.body.up_spr,
        level: req.body.up_lvl
      }).then(function(data){
        res.json(data)
      })
    })
  })
});

router.post('/up_dex', function(req, res, next) {
  db.Players.findAll({raw:true}).then(function (allPlayers) {
    db.Players.findById(allPlayers[allPlayers.length-1].id).then(function (find) {
      find.update({
        dexterity: req.body.up_dex,
        level: req.body.up_lvl
      }).then(function(data){
        res.json(data)
      })
    })
  })
});

module.exports = router;
