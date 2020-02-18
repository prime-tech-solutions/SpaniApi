require('dotenv').config();
const express = require("express");
const app = express();
const morgan = require('morgan');
const db = require('mysql');
const bodyParser = require('body-parser');



const employerRoutes = require('./api/routes/Employer');
const employeeRoutes = require('./api/routes/Employee');
//const jobRequestRoutes = require('./api/routes/JobRequest');
const jobRoutes = require('./api/routes/job');

//log
app.use(morgan('dev'));

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes to specific endpoints
app.use('/employer',employerRoutes);
app.use('/employee', employeeRoutes);
app.use('/job',jobRoutes);


//catch 404 error
app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
            message:error.message
    });
});

module.exports = app;