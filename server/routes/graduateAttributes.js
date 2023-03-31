const express = require("express"); // Importing express module
const router = express.Router(); // Creating router object
const GAIndicator = require("../models/GraduateAttributesModel.js"); // Importing GAIndicator model

// Function to add and remove courses to/from an instructor
const GraduateAttributes = async (req, res) => {
  // Get arguments from the request body

  try {
    const { id, course, indicator, attribute_1, attribute_2, attribute_3, attribute_4 } = req.body;
    const timestamp = new Date();
    
    const newGAIndicator = new GAIndicator({
      id,
      course,
      indicator,
      attribute_1,
      attribute_2,
      attribute_3,
      attribute_4,
      timestamp
    });
    
    await newGAIndicator.save();
    
    res.status(201).json(newGAIndicator);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// POST route to submit graduate attributes
router.route("/").post(GraduateAttributes);

// Exporting the router object for use in other files
module.exports = router;
