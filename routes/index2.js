const express = require('express');
const router = express.Router();
const db = require('../models')

const classSwordman = [
  { name: 'Swordman', str: 10, con: 10, int: 5, spr: 5, dex: 5, complete: 1},
  { name: 'Highlander', str: 20, con: 10, int: 5, spr: 5, dex: 5, complete: 0},
  { name: 'Peltasta', str: 10, con: 20, int: 5, spr: 5, dex: 5, complete: 0},
  { name: 'Hoplite', str: 20, con: 40, int: 5, spr: 5, dex: 5, complete: 0},
  { name: 'Barbarian', str: 40, con: 20, int: 5, spr: 5, dex: 5, complete: 0},
  { name: 'Corsair', str: 60, con: 30, int: 5, spr: 5, dex: 5, complete: 0},
  { name: 'Squire', str: 30, con: 60, int: 5, spr: 5, dex: 5, complete: 0}
];
const classWizard = [
  { name: 'Wizard', str: 5, con: 5, int: 10, spr: 10, dex: 5, complete: 1},
  { name: 'Pyromancer', str: 5, con: 5, int: 20, spr: 10, dex: 5, complete: 0},
  { name: 'Cryomancer', str: 5, con: 5, int: 10, spr: 20, dex: 5, complete: 0},
  { name: 'Necromancer', str: 5, con: 5, int: 20, spr: 40, dex: 5, complete: 0},
  { name: 'Alchemist', str: 5, con: 5, int: 40, spr: 20, dex: 5, complete: 0},
  { name: 'Chronomancer', str: 5, con: 5, int: 60, spr: 30, dex: 5, complete: 0},
  { name: 'Sorcerer', str: 5, con: 5, int: 30, spr: 60, dex: 5, complete: 0}
];
const classArcher = [
  { name: 'Archer', str: 10, con: 5, int: 5, spr: 5, dex: 10, complete: 1},
  { name: 'Sapper', str: 10, con: 5, int: 5, spr: 5, dex: 20, complete: 0},
  { name: 'Hunter', str: 20, con: 5, int: 5, spr: 5, dex: 10, complete: 0},
  { name: 'Wugushi', str: 20, con: 5, int: 5, spr: 5, dex: 40, complete: 0},
  { name: 'Scout', str: 40, con: 5, int: 5, spr: 5, dex: 20, complete: 0},
  { name: 'Rogue', str: 30, con: 5, int: 5, spr: 5, dex: 60, complete: 0},
  { name: 'Fletcher', str: 60, con: 5, int: 5, spr: 5, dex: 30, complete: 0}
];

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

for (let j = 0; j < classSwordman.length; j++) {
  if(find.dataValues.strength >= classSwordman[j].str && find.dataValues.constitution >= classSwordman[j].con) {
    find.update({
      job: classSwordman[j].name
    })
  }
}
console.log(find.dataValues);

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
