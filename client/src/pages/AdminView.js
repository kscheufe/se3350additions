import React, { useState, useEffect } from "react";

const AdminView = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const courseResponse = await fetch("http://localhost:5000/api/courses");
      const courseData = await courseResponse.json();
      setCourses(courseData);

      const instructorResponse = await fetch("http://localhost:5000/api/getinstructors");
      const instructorData = await instructorResponse.json();
      setInstructors(instructorData);
    };

    fetchData();
  }, []);

  const handleCourseChange = (event) => {
    const selectedCourse = courses.find((course) => course.name === event.target.value);
    setSelectedCourse(selectedCourse || {});
  };

  const handleInstructorChange = (event) => {
    const selectedInstructor = instructors.find((instructor) => instructor.name === event.target.value);
    setSelectedInstructor(selectedInstructor || {});
  };

  const assignCourseToInstructor = async () => {
    console.log(selectedCourse.code);
    console.log(selectedInstructor.ID);
    if (selectedInstructor.ID && selectedCourse.code) {
      const response = await fetch(`http://localhost:5000/api/instructors/${selectedInstructor.ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ course: selectedCourse.code }),
      });
      if (response.ok) {
        alert("The course was assigned to the instructor successfully");
      } else {
        alert("An error occurred while assigning the course to the instructor");
      }
    }
  };

  return (
    <div>
      <h2>Select a Course:</h2>
      <select value={selectedCourse.name} onChange={handleCourseChange}>
        {courses.map((course) => (
          <option key={course.name} value={course.name}>
            {course.name}
          </option>
        ))}
      </select>
      <h2>Select an Instructor:</h2>
      <select value={selectedInstructor.name} onChange={handleInstructorChange}>
        {instructors.map((instructor) => (
          <option key={instructor.name} value={instructor.name}>
            {instructor.name}
          </option>
        ))}
      </select>
      {selectedInstructor.name ? (
        <div>
          <h2>Selected Instructor:</h2>
          <p>ID: {selectedInstructor.ID}</p>
          <p>Name: {selectedInstructor.name}</p>
          <p>Email: {selectedInstructor.email}</p>
          <p>Assigned Courses: {selectedInstructor.assigned_courses}</p>
        </div>
      ) : null}
      {selectedCourse.name ? (
        <div>
          <h2>Selected Course:</h2>
          <p>Code: {selectedCourse.code}</p>
          <p>Name: {selectedCourse.name}</p>
          <p>Description: {selectedCourse.description}</p>
        </div>
      ) : null}
      <br />
      <br />
      <button onClick={assignCourseToInstructor}>Assign Course to Instructor</button>
    </div>
  );
};

export default AdminView;
