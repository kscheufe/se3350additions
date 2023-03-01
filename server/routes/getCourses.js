// const express = require("express");
// const router = express.Router();

// const coursesData = require("../data/courses.json");
// const courses = coursesData.courses;

// const getCourseCodes = (req, res) => {
//   return res.send(courses);
// };

// router.route("/").get(getCourseCodes);

// module.exports = router;

const express = require("express");
const router = express.Router();
const Course = require("../models/CourseModel.js");

const getCourses = (req, res) => {
  Course.find((err, courses) => {
    if (err) {
      return res.status(500).json({ error: "Error getting courses from database" });
    }
    return res.json(courses);
  });
};

router.route("/").get(getCourses);

module.exports = router;
