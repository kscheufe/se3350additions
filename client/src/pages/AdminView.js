import React, { useState, useEffect } from "react";

const AdminView = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("http://localhost:5000/api/courses");
      const data = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div>
      <h2>Select a Course:</h2>
      <select value={selectedCourse} onChange={handleChange}>
        {courses.map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AdminView;
