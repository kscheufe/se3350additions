import React, {useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/AdminView.css";//poor practice but for the purpose of showing functionality will work; the css files are mostly copy/pasted anyways
import { updateSampleSection } from '../components/sample-base';
import { DocumentEditorContainerComponent, Toolbar, WordExport, SfdtExport } from '@syncfusion/ej2-react-documenteditor';
import {useParams} from "react-router-dom";

//maybe also inject Toolbar?, 
DocumentEditorContainerComponent.Inject(WordExport, SfdtExport);

function AdminReview() {
    console.log("hello from reviewOUtline.js")
    const [courses, setCourses] = useState([]);//array of courses
    const [selectedCourse, setSelectedCourse] = useState({});//selection of course
    const [showCourseDescription, setShowCourseDescription] = useState(false);//toggle 
    const [courseDescription, setCourseDescription] = useState("");//description

        
    //array for all submissions from one class
    const [outlines, setOutlines] = useState([]);//array of outlines
    //selection of outline
    const [outlineSelection, setOutlineSelection] = useState({});//selection of outline

      useEffect(() => {
        const fetchData = async () => {
          const courseResponse = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/courses`);//routes to ./routes/getCourses
          const courseData = await courseResponse.json();
          setCourses(courseData);
            
          //get all outlines
          const outlineResponse = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/getOutline`);//route in server.js
          const outlineData = await outlineResponse.json();
          setOutlines(outlineData);
        };
    
        fetchData();
      }, []);

      //add functionality to change the outlines shown when course is shown
      const handleCourseChange = (event) => {
        const selectedCourse = courses.find((course) => course.name === event.target.value);
        setSelectedCourse(selectedCourse || {});
      };

      //handle a change in outline
      const handleOutlineChange = (event) => {
        const outlineSelection = outlines.find((outline) => outline.course === event.target.value);
        setOutlineSelection(outlineSelection || {});
      };

    return (
        //select which courses outline to review
        //show the outline submission for that course
        <div className = "container">
            <div className = "header">
                <Navbar />
            </div>
            <div className="body">
                <h1>Review Outline Submissions</h1>
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
                {selectedCourse.name && (
                <div className="form-field">
                    <label>Selected Course:</label>
                    <div>Code:{selectedCourse.code}</div>
                    <div>Name: {selectedCourse.name}</div>
                    <div>Description: {selectedCourse.description}</div>
                </div>
                )}
                <div className="form-field">
                    <label>Select an Outline:</label>
                    <select value={outlineSelection.name} onChange={handleOutlineChange}>
                        <option value=""></option>
                        {outlines.map((outline) => (
                            <option key={outline.id} value={"val" + selectedCourse.name/*outline.course*/}>
                            {"btm" + outline.course}
                        </option>
                        ))}
                    </select>
                </div>
                {outlineSelection.name && (
                <div className="form-field">
                    <label>Selected Outline:</label>
                    <div>Course:{outlineSelection.course}</div>
                    
                    <div>Description: {selectedCourse.description}</div>
                </div>
                )}
                
            </div>
        </div>
    )//select where status = submitted and course = selected course
}

export default AdminReview;
