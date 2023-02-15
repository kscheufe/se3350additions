const router = require('express').Router();
const fs = require('fs');
const Reviews = require('../models/ReviewModel');




let reviewArr = [];


router.post('/add-review', (req, res)=>{
    const review = req.body.comment;
    const reviewerId = req.body.id;
    
    try{
        reviewArr.push({id: reviewerId, comment: review});
    
        updateData(reviewArr)
        res.status(200).json(reviewArr);
        
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

// Function to update the JSON file with data
const updateData = (data) => {
  let reviewObj = {
    review:[]
  }

  reviewArr.forEach(e=>{
    reviewObj.review.push(e)
  })
   
// Convert the data array to a JSON string
const dataJson = JSON.stringify(data);

const readData = fs.readFileSync('./data/review.json')
const reviewArr = readData['re']

// Write the JSON string to a file
fs.writeFile('./data/review.json', dataJson, 'utf8', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Data written to file');
  }
});
  };

module.exports = router;