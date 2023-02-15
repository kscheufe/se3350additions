import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Container from '../components/Navbar/Container';
import '../styles/OutlineView.css'


const OutlineView = () => {
    const[courses,setCourses] = useState([])

    const user = localStorage.getItem('user')
    console.log(JSON.parse(user))


    return(
        <div>
            <Navbar/>
        <div className="content"> 
        <h1>View and Edit Course Outline Here</h1>
            <div className = "courses-grid">
                <Container/>

            </div>
        </div>
        </div>
    )
}

export default OutlineView;