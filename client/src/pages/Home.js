//Page to select either admin or instructor view


import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

const Home = () =>{
    const[isAdmin, setIsAdmin] = useState();

    return(
        <>
        <div className = "App">
        <Link to='/outline-view'><button>Log In as instructor</button></Link>
        <button>Log in as Admin</button>
        </div>
        </>
    )

}

export default Home;