const router = require('express').Router();
const User = require('../data/users.json')
const users = User.users;

router.post('/', (req, res) => {
    try{
        let user;
        users.forEach(e => {
            if(e.id.toString() == req.body.id.toString()){
                user = e;
            }
        })

        if(!user){
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