const express = require("express");
const router = express.Router();

const instructorsData = require("../data/instructor.json");
const instructors = instructorsData.instructors;

const getInstructors = (req, res) => {
  return res.send(instructors);
};

router.route("/").get(getInstructors);

module.exports = router;
