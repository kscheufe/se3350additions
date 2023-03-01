const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

// Function to add and remove courses to instructor
const assignInstructor = async (req, res) => {
  // Get instructor ID
  const instructorId = parseInt(req.params.id);
  console.log(instructorId);

  try {
    // Get the instructor with the given ID
    const instructor = await User.findOne({ id: instructorId });

    if (!instructor) {
      return res.status(400).send({ error: `Instructor with ID ${instructorId} not found` });
    }

    // If the course is already present in the instructor's array of courses, then remove the course
    if (instructor.assigned_courses.includes(req.body.course)) {
      const updatedUser = await User.findOneAndUpdate({ id: instructorId }, { $pull: { assigned_courses: req.body.course } }, { new: true });

      return res.send(updatedUser);
    }

    // If the course is not present in the instructor's array of courses, then add the course
    const updatedUser = await User.findOneAndUpdate({ id: instructorId }, { $push: { assigned_courses: req.body.course } }, { new: true });

    return res.send(updatedUser);
  } catch (error) {
    console.log("Error updating user:", error);
    return res.status(500).send({ error: "Error updating user" });
  }
};

// POST route to implement function above
router.route("/:id").post(assignInstructor);

// Export router to be used by server.js
module.exports = router;
