const express = require('express');
 const router = express.Router();

 router.route('/contacts').get(getAllContacts)