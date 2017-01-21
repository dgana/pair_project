var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Final Project Phase 1' });
});

router.get('/main.ejs', function(req, res, next) {
  res.render('main', { title: 'Final Project Phase 1' });
});

module.exports = router;
