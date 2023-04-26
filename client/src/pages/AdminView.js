import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/AdminView.css";

const AdminView = () => {
  const [courses, setCourses] = useState([]);//array of courses
  const [selectedCourse, setSelectedCourse] = useState({});//selection of course
  const [instructors, setInstructors] = useState([]);//array of instructors
  const [selectedInstructor, setSelectedInstructor] = useState({});
  const [showNotification, setShowNotification] = useState(false);//toggle
  const [notificationMessage, setNotificationMessage] = useState("");//description
  const [showCourseDescription, setShowCourseDescription] = useState(false);
  const [courseDescription, setCourseDescription] = useState("");
  


  useEffect(() => {
    const fetchData = async () => {
      const courseResponse = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/courses`);
      const courseData = await courseResponse.json();
      setCourses(courseData);

      const instructorResponse = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/getinstructors`);
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
    if (selectedInstructor.id && selectedCourse.code) {
      //fetch the response to assigning course FROM routes/assignInstructor
      //this is client side script
      //assignInstructor is serverside script
      const response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/instructors/${selectedInstructor.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ course: selectedCourse.code }),
      });
      if (response.ok) {
        setNotificationMessage("The course was assigned to the instructor successfully");
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 5000);
      } else {
        alert("An error occurred while assigning the course to the instructor");
      }
    }
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  const showCourseDescriptionPopup = (courseCode) => {
    const course = courses.find((course) => course.code === courseCode);
    if (course) {
      setCourseDescription(course.description);
      setShowCourseDescription(true);
      setTimeout(() => {
        setShowCourseDescription(false);
      }, 5000);
    }
  };

  const closeCourseDescription = () => {
    setShowCourseDescription(false);
  };

  return (
    <div className="container">
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <h1>Assign Courses to Instructor</h1>
        <div className="form">
          <div className="form-field">
            <label>Select an Instructor:</label>
            <select value={selectedInstructor.name} onChange={handleInstructorChange}>
              <option value=""></option>
              {instructors.map((instructor) => (
                <option key={instructor.name} value={instructor.name}>
                  {instructor.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label>Select a Course:</label>
            <select value={selectedCourse.name} onChange={handleCourseChange}>
              <option value=""></option>
              {courses.map((course) => (
                <option key={course.name} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
          {selectedInstructor.name && (
            <div className="form-field">
              <label>Selected Instructor:</label>
              <div>ID: {selectedInstructor.id}</div>
              <div>Name: {selectedInstructor.name}</div>
              <div>Email: {selectedInstructor.email}</div>
              <div>
                Assigned Courses:{" "}
                {selectedInstructor.assigned_courses &&
                  selectedInstructor.assigned_courses.map((courseCode, index) => (
                    <button className="course-button" key={courseCode} onClick={() => showCourseDescriptionPopup(courseCode)}>
                      {courseCode}
                      {index < selectedInstructor.assigned_courses.length - 1 && ", "}
                    </button>
                  ))}
              </div>
            </div>
          )}
          {selectedCourse.name && (
            <div className="form-field">
              <label>Selected Course:</label>
              <div>Code:{selectedCourse.code}</div>
              <div>Name: {selectedCourse.name}</div>
              <div>Description: {selectedCourse.description}</div>
            </div>
          )}
        </div>
      </div>
      <button className="btn" onClick={assignCourseToInstructor}>
        Assign Course to Instructor
      </button>
      {showNotification && (
        <div className="notification">
          <div className="notification-content">
            <span className="close-notification" onClick={closeNotification}>
              &times;
            </span>
            <div className="notification-text">{notificationMessage}</div>
          </div>
        </div>
      )}
      {showCourseDescription && (
        <div className="notification">
          <div className="notification-content">
            <span className="close-notification" onClick={closeCourseDescription}>
              &times;
            </span>
            <div className="notification-text">{courseDescription}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminView;
