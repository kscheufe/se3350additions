const router = require('express').Router();
const fs = require('fs');
const Reviews = require('../models/ReviewModel');


router.post('/add-review', (req, res)=>{
    const review = req.body.comment;
    const reviewerId = req.body.id;
    
    try{
  
    
        res.status(200).json();
        
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

router.get('/get-review',async (req, res) => {
    try{
        const reviews = await Reviews.find()
        res.json(reviews);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})


module.exports = router;