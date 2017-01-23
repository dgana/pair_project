var express = require('express');
var router = express.Router();
let db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Final Project Phase 1' });
});

// router.get('/main.ejs', function(req, res, next) {
//   res.render('main', { title: 'Final Project Phase 1' });
// });

router.post('/className', function(req, res, next) {
  db.Players.create().then(function (find) {
    if (req.query.job === "Swordman") {
      find.update({
        job: string,
        strength: 10,
        constitution: 10,
        intelligence: 5,
        spirit: 5,
        dexterity: 5
      })
    }
    else if (req.query.job === "Wizard") {
      find.update({
        job: string,
        strength: 5,
        constitution: 5,
        intelligence: 10,
        spirit: 10,
        dexterity: 5
      })
    }
    else if (req.query.job === "Archer") {
      find.update({
        job: string,
        strength: 10,
        constitution: 5,
        intelligence: 5,
        spirit: 5,
        dexterity: 10
      })
    }
  });
  res.render('main', { title: 'Final Project Phase 1' , name: req.query.job});
});

module.exports = router;
