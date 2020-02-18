const service = require('../service/EmployerService');
const {genSaltSync,hashSync} = require('bcrypt');
module.exports={
    createUser:(req,res)=>{
        const body = req.body;
       /*  const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt); */
        service.create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:'database connection error'
                });
            }

            return res.status(200).json({
                success:1,
                data:results
            })
        });
    },

    /**
   * fetch all users
   * @param http request
   * @param http response
   */
    fetchUser: (req, res) => {
        service.fetchUser((err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "database conncetion error"
                })
            }
            return res.status(200).json({
                results
            })
        });
    },

    /**
  * fetch a specific user
  * @param http request
  * @param http response
  */
    fetchUserById: (req, res) => {
        const id = req.params.id;
        service.fetchUserById(id, (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "database conncetion error"
                })
            }
            return res.status(200).json({
                results
            })
        });
    },

    /**
     * for login in
     * @param email
     */
    fetchUserByEmail: (req, res) => {
       // const email ="\""+ req.params.email +"\"";
        //console.log(email);

        const email = req.body.email;
        const password =req.body.password;

        service.fetchUserByEmail(email, (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "database conncetion error"
                })
            }
            if(!results){
                return res.status(414).json({
                   error:"invalid email or password"
                });
            }else{
                if(results.password == password){
                    results.user = "employer"
                    return res.status(200).json({
                        success:"logged in successfully",
                        employer: results
                    });
                }else{
                    return res.status(414).json({
                        error: "invalid email or password"
                    });
                }
            }
        });
    }

}