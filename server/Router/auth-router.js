 const express  = require('express');
 const router  = express.Router();
 const authController = require('../controllers/auth-controller');
 const signupSchema= require("../validator/auth_validator")
 const validate =  require("../middlewares/validate-middlewares")
  const authMiddleware =  require('../middlewares/auth-middleware')
 router.route("/").get(authController.home);

 router.route('/register').post( validate(signupSchema),authController.register);
 
  router.route('/login').post(authController.login);
   
  router.route('/user').get(authMiddleware,authController.user);

   module.exports = router;


