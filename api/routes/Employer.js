const express = require('express');
const router = express.Router();
const { createUser,fetchUser,fetchUserByEmail,fetchUserById } = require('../controller/EmployerController');

//HTTP request
router.post('/', createUser);
router.get('/', fetchUser);
router.post('/login/',fetchUserByEmail);
router.get('/:id', fetchUserById);

module.exports = router;