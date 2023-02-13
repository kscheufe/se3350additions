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
          <p>Name: {selectedInstructor.name}</p>
          <p>Email: {selectedInstructor.email}</p>
          <p>Specialty: {selectedInstructor.specialty}</p>
        </div>
      ) : null}
      {selectedCourse.name ? (
        <div>
          <h2>Selected Course:</h2>
          <p>Name: {selectedCourse.name}</p>
          <p>Description: {selectedCourse.description}</p>
          <p>Instructor: {selectedCourse.instructor}</p>
          <p>Duration: {selectedCourse.duration}</p>
        </div>
      ) : null}
    </div>
  );
};

export default AdminView;
