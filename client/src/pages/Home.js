//Page to select either admin or instructor view
import React from 'react';
import '../styles/Home.css'
import Navbar from '../components/Navbar/Navbar';

const Home = () =>{
    return(
        <div>
        <Navbar/>
        <div className='content'>    
            <div>
                <h1>About section</h1>
                <h2>This part goes through the features of the app</h2>
            </div>
        </div>
        </div>
    )

}

export default Home;