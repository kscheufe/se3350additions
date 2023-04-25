const express = require("express"); // Importing express module
const router = express.Router(); // Creating router object
const Outline = require("../models/OutlineModel.js"); // Importing GAIndicator model

// Function to submit proposed outlines
const postOutline = async (req, res) => {
  // Get arguments from the request body

  //const courseNum = parseInt(req.params.course.tostring().substring())
 
  try {
    const { content } = req.body;
    const courseID = req.params.course;;
    //console.log(courseNum);
    const timestamp = new Date();
    const status = 'submitted';/////////////////

    const newOutline = new Outline({
      courseID,
      content,
      timestamp,
      status
    });


    await newOutline.save();//save the new outline in the db


    res.status(201).json(newOutline);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


// POST route to submit proposed course outline to database
router.route("/:course").post(postOutline);


// Exporting the router object for use in other files
module.exports = router;