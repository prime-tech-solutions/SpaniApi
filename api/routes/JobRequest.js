const express = require('express');
const router = express.Router();
const {fetchJobRequest,fetchJobRequestById,createJobRequest} = require('../controller/JobRequestController');

//HTTP request
router.get('/',fetchJobRequest);
router.get('/:id',fetchJobRequestById);
router.post('/',createJobRequest);

module.exports = router;