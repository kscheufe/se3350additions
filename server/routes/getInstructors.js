const express = require("express");
const router = express.Router();

const instructorsData = require("../data/users.json");
const users = instructorsData.users;
const instructors = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin === false) {
    instructors.push(users[i]);
  }
}

const getInstructors = (req, res) => {
  return res.send(instructors);
};

router.route("/").get(getInstructors);

module.exports = router;
