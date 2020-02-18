const db = require('mysql');
require('dotenv').config();


/* const con = db.createConnection({
    host : process.env.DB_HOST,
    user:process.env.DB_PASS,
    password: process.env.DB_PASS,
    database:process.env.DB_NAME
}); */

const con = db.createConnection({
    host: 3000,
    user: 'primetechnologies',
    password: '##spaniapi',
    database: 'spani'
});

//connect to database
con.connect(function (err) {
    if (err) console.log(err);;
    console.log("Connected!");

})

module.exports = con;
