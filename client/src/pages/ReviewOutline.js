import React, {useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/AdminView.css";//poor practice but for the purpose of showing functionality will work; the css files are mostly copy/pasted anyways
import { updateSampleSection } from '../components/sample-base';
import { DocumentEditorContainerComponent, Toolbar, WordExport, SfdtExport } from '@syncfusion/ej2-react-documenteditor';
import {useParams} from "react-router-dom";
import defaultOutline from "./defaultOutline.json";

//maybe also inject Toolbar?, 
DocumentEditorContainerComponent.Inject(WordExport, SfdtExport);

function AdminReview() {
    console.log("hello from reviewOUtline.js")
    const [courses, setCourses] = useState([]);//array of courses
    const [selectedCourse, setSelectedCourse] = useState({});//selection of course
    const [showCourseDescription, setShowCourseDescription] = useState(false);//toggle 
    const [courseDescription, setCourseDescription] = useState("");//description
    const [clicked, setClicked] = useState(false);
        
    //array for all submissions from one class
    const [outlines, setOutlines] = useState([]);//array of outlines
    //selection of outline
    const [outlineSelection, setOutlineSelection] = useState({});//selection of outline

      useEffect(() => {
        updateSampleSection();
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

      let hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
      let container;

      function rendereComplete() {
        window.onbeforeunload = function () {
            return 'Want to save your changes?';
        };
        container.serviceUrl = hostUrl + 'api/documenteditor/';
        container.documentEditor.pageOutline = '#E0E0E0';
        container.documentEditor.acceptTab = true;
        container.documentEditor.resize();
        container.documentEditor.currentUser = JSON.parse(user)[0].email;

        
        //titleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), container.documentEditor, true);

        onLoadDefault();
    }      

    function onLoadDefault() {
        // tslint:disable
        let defaultDocument = JSON.parse(defaultOutline);
        
        // tslint:enable        
        container.documentEditor.open(JSON.stringify(defaultDocument));
        container.documentEditor.documentName = 'Course Outline Template';
        //titleBar.updateDocumentTitle();
        container.documentChange = () => {
            //titleBar.updateDocumentTitle();
            container.documentEditor.focusIn();
        };
    }

      const confirmationWindow = () => {
          if(!clicked){
              EnforceProtection();
              alert('All activities done on a course outline are tracked. All changes must be approved before the course outline can be used.');
          }
          setClicked(true);
          
      }; 
      
      const user = localStorage.getItem('user');
      
      function EnforceProtection() {
        //enforce protection
        if(JSON.parse(user)[0].id < 10){
            container.documentEditor.editor.enforceProtection('123', 'RevisionsOnly');
            console.log("enforced")
        } else {
            StopProtection()
        }
        
        
    }
    function StopProtection() {
        //stop the document protection
        container.documentEditor.editor.stopProtection('123');
    }

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
                <div className='control-pane'>
                    <div className='control-section'>
                        {/* <div id='documenteditor_titlebar' className="e-de-ctn-title"></div> */}
                        <div id="documenteditor_container_body" onClick={confirmationWindow}>
                            <DocumentEditorContainerComponent id="container" ref={(scope) => { container = scope; }} style={{ 'display': 'flex','margin-left':'15vw' }} height={'790px'} width = {'70vw'} enableToolbar={true} locale='en-US'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )//select where status = submitted and course = selected course
}

export default AdminReview;
