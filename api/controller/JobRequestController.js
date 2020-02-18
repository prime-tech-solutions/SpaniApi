const service = require('../service/JobRequestService');


module.exports = {

        /**
         * create new job request
         * @param http request
         * @param http response
         */
        createJobRequest:(req,res)=>{
            //get body
            const body = req.body;
            
            //invoke service
            service.createJobRequest
            
        }


};