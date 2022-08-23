var express = require('express');
const authController = require('../controllers/authController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/auth/register", authController.register);

module.exports = router;
