const db = require('../connection/DB_Connection');

module.exports={
    createUser: (data,callback)=>{

        db.query(
            "insert into employer(first_name,last_name,email,password,cellphone,dob,loc_id,gender) values(?,?,?,?,?,?,?,?)",
                       
            [
                data.first_name,
                data.last_name,
                data.email, 
                data.password,  
                data.cellphone,
                data.dob,
                data.loc_id,
                data.gender
            ],
            (error,results,fields)=>{
                if(error){
                    callback(error)
                
                    }   
                     return callback(null,results)
            }
            
        );
        },

         fetchUser: (id, callback) => {

                /**
             * @param sql statement
             * @param values
             * @param callback 
             */
                db.query(
                    "select * from employer where where emp_id=?",
                    [id],
                    (error, results, fields) => {
                        if (error) callback(error);
                        return callback(null, results);

                    }
                )
        },

        fetchUserById: (id, callback) => {

            /**
         * @param sql statement
         * @param values
         * @param callback 
         */
            db.query(
                "select * from employer where where emp_id=?",
                [id],
                (error, results, fields) => {
                    if (error) callback(error);
                    return callback(null, results);

                }
            )

        },

        fetchUserByEmail: (email, callback) => {

                /**
             * @param sql statement
             * @param values
             * @param callback 
             */
                db.query(
                    "select * from employer where where emp_id=?",
                    [email],
                    (error, results, fields) => {
                        if (error) callback(error);
                        return callback(null, results);

                    }
                )

            }
                
    };


