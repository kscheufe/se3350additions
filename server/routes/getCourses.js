const express = require("express");
const router = express.Router();

const coursesData = require("../data/courses.json");
const courses = coursesData.courses;

const getCourseCodes = (req, res) => {
  let courseCodes = [];

  for (let i = 0; i < courses.length; i++) {
    courseCodes.push(courses[i].code);
  }

  console.log(courses.length);
  console.log(courseCodes);

  return res.send(courseCodes);
};

router.route("/").get(getCourseCodes);

module.exports = router;
