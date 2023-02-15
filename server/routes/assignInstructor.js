const express = require("express");
const router = express.Router();
const fs = require("fs");
// Get the JSON data of intructors
const instructorData = require("../data/users.json");
// Convert the JSON data into an array
const users = instructorData.users;
const instructors = [];
const admins = [];

// Loop to populate admin array
for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin === true) {
    admins.push(users[i]);
  }
}

// Loop to populate instructors array
for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin === false) {
    instructors.push(users[i]);
  }
}

// Function to add and remove courses to instructor
const assignInstructor = (req, res) => {
  // Get instructor ID
  const instructorId = parseInt(req.params.id);
  console.log(instructorId);

  // Find the index of the instructor in the array using the ID provided
  let foundInstructor = false;
  let instructorIndex;

  for (let i = 0; i < instructors.length; i++) {
    // console.log(instructors[i].id);
    if (instructors[i].id === instructorId) {
      foundInstructor = true;
      instructorIndex = i;
    }
  }

  // If no instructor is found with the given ID, return a 400 message
  if (foundInstructor === false) {
    return res.status(400).send({ error: `Instructor with ID ${instructorId} not found` });
  }
  const instructor = instructors[instructorIndex];
  console.log(instructor);
  // If the course is already present in the instructor's array of courses, then remove the course
  if (instructor.assigned_courses.includes(req.body.course) === true) {
    const indexOfExistingCourse = instructor.assigned_courses.indexOf(req.body.course);
    instructor.assigned_courses.splice(indexOfExistingCourse, 1);
    updateData();
    return res.send(instructor);
  }
  // If the course is not present in the instructor's array of courses, then add the course
  instructor.assigned_courses.push(req.body.course);
  console.log(req.body.course);
  updateData();
  return res.send(instructor);
};

// POST route to implement function above
router.route("/:id").post(assignInstructor);

// Function to update the JSON file with data
const updateData = () => {
  // Create an object to be sent to the instrtor.json file and push array elements into the instructor array within the object
  var obj = {
    users: [],
  };
  console.log(instructors.length);

  for (let i = 0; i < admins.length; i++) {
    obj.users.push(admins[i]);
  }

  for (let i = 0; i < instructors.length; i++) {
    obj.users.push(instructors[i]);
  }

  // Convert json file to string in order to be able to
  let stringText = JSON.stringify(obj);
  fs.writeFile("./data/users.json", stringText, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
};

// Export router to be used by server.js
module.exports = router;
