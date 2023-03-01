const router = require('express').Router();
const User = require('../models/User')

router.post('/', async(req, res) => {
    try{
        const user = await User.find({id:req.body.id}) 

        if(user.length === 0){
            return res.status(400).send({
                message:"Invalid ID"
            })
        }

        // send user data 
        res.status(200).send({
            data:{user}, message:"Logged in Succesfully" 
        })
    }
    catch(err){
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
})


module.exports = router;