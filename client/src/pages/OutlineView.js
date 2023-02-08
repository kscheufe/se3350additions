import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom';

const OutlineView = () => {
    const handleLogout = () => {
		localStorage.removeItem("user");
		window.location.replace('/');
	};

    return(
        <div className = "App">
            View Course Outlines Here
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default OutlineView;