import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom';

const OutlineView = () => {

    return(
        <div className = "App">
            View Course Outlines Here
            <Link to='/'><button>Logout</button></Link>
        </div>
    )
}

export default OutlineView;