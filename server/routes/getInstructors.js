// const express = require("express");
// const router = express.Router();

// const instructorsData = require("../data/users.json");
// const users = instructorsData.users;
// const instructors = [];

// for (let i = 0; i < users.length; i++) {
//   if (users[i].isAdmin === false) {
//     instructors.push(users[i]);
//   }
// }

// const getInstructors = (req, res) => {
//   return res.send(instructors);
// };

// router.route("/").get(getInstructors);

// module.exports = router;

const express = require("express"); // Importing express module
const router = express.Router(); // Creating router object
const User = require("../models/User.js"); // Importing User model

// Controller function to get instructors
const getInstructors = (req, res) => {
  // Finding all users that are not admins
  User.find({ isAdmin: false }, (err, instructors) => {
    if (err) {
      // If there's an error, return a 500 error response
      return res.status(500).json({ error: "Error getting instructors from database" });
    }
    // If successful, return the instructors as a JSON response
    return res.json(instructors);
  });
};

// Setting the route for getting instructors
router.route("/").get(getInstructors);

// Exporting the router object for use in other files
module.exports = router;
