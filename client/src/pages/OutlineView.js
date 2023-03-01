import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import '../styles/OutlineView.css'
import {Link, Outlet, useParams} from 'react-router-dom';



const OutlineView = ({courses}) => {
    let params = useParams();
    const length = Object.keys(params).length;
    let outlineView;
    if(length === 0){
        outlineView = true;
    }
    else{
        outlineView = false;
    }

        //if no courses have been assigned it will display a message
        let assigned = courses.length > 0;
    return(
        <div>
            {outlineView && <>
            <Navbar/>
            <h1>View and Edit Course Outline Here</h1>
            <div className = "courses-flex">
                        {assigned ? courses.map((course, index)=>(
                                    <div key = {index}  className = "courses-item">
                                        <Link to = {`/outline-view/${course}`} >
                                            <h2>{course}</h2>
                                            <p>Navigate to Outline Editor</p>
                                        </Link>
                                    </div>
                                    
                            )): <h2>You have not yet been assigned a course</h2>}
            </div>
            </>}
            
            {!outlineView && <Outlet/> }
        </div>
    )
}

export default OutlineView;