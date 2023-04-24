const express = require("express"); // Importing express module
const router = express.Router(); // Creating router object
const Outline = require("../models/OutlineModel.js"); // Importing GAIndicator model


// Function to submit proposed outlines
const postOutline = async (req, res) => {
  // Get arguments from the request body


  try {
    const { content } = req.body;
    const course = req.params.course;
    const timestamp = new Date();
    const status = '';/////////////////

    const newOutline = new Outline({
      course,
      content,
      timestamp,
      //status
    });


    await newOutline.save();


    res.status(201).json(newOutline);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


// POST route to submit proposed course outline
router.route("/:course").post(postOutline);


// Exporting the router object for use in other files
module.exports = router;