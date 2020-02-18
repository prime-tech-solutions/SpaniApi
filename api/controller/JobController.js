const service = require('../service/JobService');

module.exports = {

    /**
     * fetch all the jobs
     */
    fetchJob: (req, res) => {
        service.fetchJob((err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error"
                });
            }

            if(!results){
                return res.status(414).json({
                    message:"could not retrieve jobs"
                });
            }else{
                if(results[0]==null){
                    return res.status(202).json({
                        message:"no jobs available"
                    })
                }else{
                    return res.status(200).json({
                        job:results
                    })
                }
            }

            
        });
    },

    /**
    * create a job
    * @param request
    * @param cresponse
    */
    createJob: (req, res) => {
        const body = req.body;

        //get current date
        var date = new Date();
        body.date = date.getFullYear + "-"+date.getMonth+"-"+date.getDay;

        /**
         * @param body
         * @param callback
         */
        service.createJob(body, (err, results) => {

            //if theres error display to console
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error"
                })
            }

            //if there is no error
            return res.status(200).json({
               results: results
            })
        })

    },

    /**
     * fetch only one user
     * @param job id
     * @param callback
     */

    fetchJobById: (req, res) => {
        const id = req.params.id;
        service.fetchJobById(id, (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    message: "database connection error"
                });
            }

            if (!results) {
                return res.status(414).json({
                    message: "could not retrieve jobs"
                });
            } else {
                if (results[0] == null) {
                    return res.status(202).json({
                        message: "no jobs available"
                    })
                } else {
                    return res.status(200).json({
                        job: results[0]
                    })
                }
            }
        });
    }
}