const express = require('express');
const router = express.Router();
const { createUser, fetchUser,fetchUserByEmail,fetchUserById } = require('../controller/EmployeeController');

//HTTP request
router.post('/', createUser);
router.get('/', fetchUser);
router.get('/:email',fetchUserByEmail);
router.get('/:id', fetchUserById);

module.exports = router;