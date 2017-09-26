var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/groupmember1', function(req, res) {
  res.render('groupmember1');
  //res.sendFile('public/groupmember1.html');
});

router.get('/felix', function(req, res) {
  res.render('felix');
});

router.get('/mayank', function(req, res) {
  res.render('mayank');
});

router.get('/jirat', function(req, res) {
  res.render('jirat');
});

router.get('/lion', function(req, res) {
  res.render('lion');
});

router.get('/julian', function(req, res) {
  res.render('julian');
});





module.exports = router;
