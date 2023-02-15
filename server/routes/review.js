const router = require('express').Router();
const fs = require('fs');
const Reviews = require('../data/review.json')
const ReviewArray = Reviews.reviews;



let reviewArr = []


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

router.get('/get-review', (req, res) => {
    try{
        res.json(ReviewArray);
        
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

// Function to update the JSON file with data
const updateData = (data) => {
   
// Convert the data array to a JSON string
const dataJson = JSON.stringify(data);

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