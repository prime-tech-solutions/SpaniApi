const db = require('../connection/DB_Connection');

module.exports = {

    //handle POST Requests
    createJob:(data,callback)=>{

        /**
         * query the job table
         * @param sql statement
         * @param values
         * @param callback 
         */
        db.query(
            "insert into job(status,date,employer,price,description,title) values(?,?,?,?,?,?)",
            [
                data.status,
                data.date,
                data.employer,
                data.price,
                data.description,
                data.title
            ],
            (err,results,fields)=>{
                if(err) return callback(err);
                return callback(null,results);
            }
        )

    },

    fetchJobById:(id,callback)=>{
            /**
         * query the job table
         * @param sql statement
         * @param values
         * @param callback
         */
        db.query(
            "select * from job where job_id=?",
            [id],
            (err, results, fields) => {
                if (err) return callback(err);
                return callback(null, results);
            }

        )
    },

    fetchJob:callback=>{
            /**
     * query the job table
     * @param sql statement
     * @param values
     * @param callback
     */
        db.query(
            "select * from job",
            [],
            (err, results, fields) => {
                if (err) return callback(err);
                return callback(null, results);
            }
        )
    },

    fetchJobByEmployer: (id, callback) => {
        /**
     * query the job table
     * @param sql statement
     * @param values
     * @param callback
     */
        db.query(
            "select * from job where emp_id=?",
            [id],
            (err, results, fields) => {
                if (err) return callback(err);
                return callback(null, results);
            }

        )
    }

}