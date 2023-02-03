const router = require('express').Router();
const Joi = require('joi');
const User = require('../data/users.json')
const users = User.users;

router.post('/', (req, res) => {
    try{
        let user;
        users.forEach(e => {
            if(e.id == req.body.id){
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
            data:{ user}, message:"Logged in Succesfully" 
        })
    }
    catch(err){
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
})

const validate = (data) =>{
    const schema = Joi.object({
        id:Joi.string().id().required().label('ID'),
    })
    return schema.validate(data);
}

module.exports = router;