//Page to select either admin or instructor view

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

const Home = () =>{
    const[isAdmin, setIsAdmin] = useState();

    

    return(
        <div className = "login-container">{/* Each of these buttons link to the way the user will see the application. */}
            {/* For each User, they will be prompted to enter ID, if that ID matches, they will be able to log in */}
        <div className = "App">  
          <h1> Course Outline Manager</h1>
            <div className = "instructor-form">
                <Link to='/outline-view'><button className="login-button">Log in as instructor</button></Link>
                <input type = 'text' placeholder='Enter ID...'></input>
            </div>
            <div className='admin-form'>
                <Link to='/admin-view'><button className="login-button">Log in as admin</button></Link>
                <input type = 'text' placeholder='Enter ID...'></input>
            </div>
        </div>
        </div>
    )

}

export default Home;