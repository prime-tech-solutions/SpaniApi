const db = require('../connection/DB_Connection');

//connect to database
db.connect((err)=>{
    if (err) console.log(err);;
    console.log("Connected to database");
});

module.exports={

    /**
     * create a new job request
     * @param body
     * @param callback
     */
    creatJobRequest:(data,callback)=>{
        
        /**
         * query the job table
         * @param sql statement
         * @param values
         * @param callback
         */
        db.query(
            "insert into job_request(job_id,employee_id,status)",
            [
                data.job_id,
                data.employee_id,
                data.status
            ],
            (err,results,fields)=>{
                if(err) return callback(err);
                return callback(null,results);
            }
        )
    },

    /**
     * fetch all job requests
     */
    fetchJobRequest:callback=>{

        /**
         * query the job table
         * @param sql statement
         * @param values
         * @param callback
         */
        db.query(
            "select * from job_request",
            [],
            (err, results, fields) => {
                if (err) return callback(err);
                return callback(null, results);
            }
        )

    },
    fetchJobRequestById: (id,callback) => {

        /**
         * query the job table
         * @param sql statement
         * @param values
         * @param callback
         */
        db.query(
            "select * from job_request where request_id=?",
            [id],
            (err, results, fields) => {
                if (err) return callback(err);
                return callback(null, results);
            }
        )

    }
};

