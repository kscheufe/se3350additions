const express = require("express"); // Importing express module
const router = express.Router(); // Creating router object
const GAIndicator = require("../models/GraduateAttributesModel.js"); // Importing GAIndicator model

// Function to add and remove courses to/from an instructor
const GraduateAttributes = async (req, res) => {
  // Get instructor ID from the request parameters
  const instructorId = parseInt(req.params.id);
  console.log(instructorId);

  try {
    // Find the instructor with the given ID in the database
    const instructor = await GAIndicator.findOne({ id: instructorId });

    if (!instructor) {
      // If instructor is not found, send a 400 error response
      return res.status(400).send({ error: `Instructor with ID ${instructorId} not found` });
    }

    // If the course is already assigned to the instructor, remove the course from the instructor's assigned courses
    if (instructor.assigned_courses.includes(req.body.course)) {
      const updatedUser = await User.findOneAndUpdate({ id: instructorId }, { $pull: { assigned_courses: req.body.course } }, { new: true });

      return res.send(updatedUser); // Send the updated user object as a response
    }

    // If the course is not assigned to the instructor, add the course to the instructor's assigned courses
    const updatedUser = await User.findOneAndUpdate({ id: instructorId }, { $push: { assigned_courses: req.body.course } }, { new: true });

    return res.send(updatedUser); // Send the updated user object as a response
  } catch (error) {
    // If there's an error while updating the user, send a 500 error response
    console.log("Error updating user:", error);
    return res.status(500).send({ error: "Error updating user" });
  }
};

// POST route to submit graduate attributes
router.route("/:id").post(GraduateAttributes);

// Exporting the router object for use in other files
module.exports = router;
