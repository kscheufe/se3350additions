import React, { useState, useEffect } from "react";

const AdminView = () => {
  const [courses, setCourses] = useState([]);

  const handleSubmit = async () => {
    // fetch the API request
    try {
      const response = await fetch(`http://localhost:5000/api/courses`, {
        method: "GET",
        headers: { "Content-Type": "application/json " },
      });

      const data = await response.json();

      // redirect user to landing page
      if (response.status === 200) {
        console.log("Success");
        console.log(data);
      }

      if (response.status === 400) {
        console.log("Error 400");
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit();

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminView;
