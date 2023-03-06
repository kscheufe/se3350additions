// const express = require("express");
// const router = express.Router();

// const coursesData = require("../data/courses.json");
// const courses = coursesData.courses;

// const getCourseCodes = (req, res) => {
//   return res.send(courses);
// };

// router.route("/").get(getCourseCodes);

// module.exports = router;

const express = require("express"); // Importing express module
const router = express.Router(); // Creating router object
const Course = require("../models/CourseModel.js"); // Importing Course model

// Controller function to get courses
const getCourses = (req, res) => {
  // Finding all courses
  Course.find((err, courses) => {
    if (err) {
      // If there's an error, return a 500 error response
      return res.status(500).json({ error: "Error getting courses from database" });
    }
    // If successful, return the courses as a JSON response
    return res.json(courses);
  });
};

// Setting the route for getting courses
router.route("/").get(getCourses);

// Exporting the router object for use in other files
module.exports = router;
