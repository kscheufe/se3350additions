//Page to select either admin or instructor view
import React from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-div">
      <Navbar className=".navbar-admin" />
      <div className="about-container">
        <h1>Welcome to the Course Outlines Manager!</h1>
        <div className="about-feature">
          <img src="./feature1.crdownload" alt="Feature 1" />
          <div>
            <h2>Create and Manage Course Outlines</h2>
            <p>Easily create and manage course outlines for all of your classes. Keep track of important details such as course descriptions, learning outcomes, and required textbooks.</p>
          </div>
        </div>
        <div className="about-feature">
          <img src="./feature2.png" alt="Feature 2" />
          <div>
            <h2>Stay on Top of Deadlines and Dates</h2>
            <p>Add important dates and deadlines to each course outline, such as exam dates, assignment due dates, and project deadlines. Never miss an important deadline again!</p>
          </div>
        </div>
        <div className="about-feature">
          <img src="./feature3.png" alt="Feature 3" />
          <div>
            <h2>Track Your Progress Throughout the Semester</h2>
            <p>Easily keep track of your progress throughout the semester using our built-in progress tracking feature. Mark off completed tasks and view your progress at a glance.</p>
          </div>
        </div>
        <Link to="https://outliner.atlassian.net/l/cp/ofSjU19z" className="button">
          Visit our Confluence Page!
        </Link>
      </div>
    </div>
  );
};

export default Home;
