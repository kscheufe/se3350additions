const express = require("express");
const router = express.Router();

const coursesData = require("../data/courses.json");
const courses = coursesData.courses;

const getCourseCodes = (req, res) => {
  return res.send(courses);
};

router.route("/").get(getCourseCodes);

module.exports = router;
