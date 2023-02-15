import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import '../styles/OutlineView.css'

const OutlineView = () => {
    const[courses,setCourses] = useState([])

useEffect(() =>{
    const fetchData = async() =>{
        const courseResponse = await fetch("http://localhost:5000/api/courses");
        const courseData = await courseResponse.json();
        setCourses(courseData);
    }
})

    return(
        <div>
            <Navbar/>
        <div className="content"> 
            <div>
                <h1>View and Edit Course Outline Here</h1>
            </div>
        </div>
        </div>
    )
}

export default OutlineView;