const router = require('express').Router();

router.post('/', function(req, res) {

    try{

    }
    catch(err){
        res.status().json({message: err.message})
    }

})


module.exports = router;