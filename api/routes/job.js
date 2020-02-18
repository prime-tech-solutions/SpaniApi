const express = require('express');
const router = express.Router();
const {fetchJob,fetchJobById,createJob} = require('../controller/JobController');

//HTTP request
router.get('/', fetchJob);
router.get('/:id', fetchJobById);
router.post('/',createJob);

module.exports = router;
