var express = require('express');
const authController = require('../controllers/authController');
var { Joi, validate } = require('express-validation');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Register API. */
router.post("/auth/register", validate({
  body: Joi.object({
    firstName : Joi.string().required(),
    lastName : Joi.string().required(),
    userEmail : Joi.string().email().required(),
    userPassword : Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
  })
}, {}, {allowUnknown: true, abortEarly: false}), authController.register);

/** Login API */
router.post("/auth/login", validate({
  body: Joi.object({
    userEmail : Joi.string().email().required(),
    userPassword : Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
  })
}, {}, {allowUnknown: true, abortEarly: false}), authController.login);

module.exports = router;
