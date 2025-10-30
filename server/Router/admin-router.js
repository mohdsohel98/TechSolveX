const express = require('express');
 const adminContoller = require('../controllers/admin-controller')
 const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const router  = express.Router();

 router.route('/users')
 .get(authMiddleware,adminMiddleware,adminContoller.getAllUsers)

 router.route('/contacts').get( authMiddleware,adminMiddleware,adminContoller.getAllContacts)

  router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,adminContoller.DeleteUserById);

   router.route("/users/:id").get(authMiddleware,adminMiddleware,adminContoller.getUserById);

//  update the users data 
    router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,adminContoller.updateUserById);

  module.exports = router;