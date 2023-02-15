//Page to select either admin or instructor view
import React from 'react';
import '../styles/Home.css'
import Navbar from '../components/Navbar/Navbar';

const Home = () =>{
    return(
        <>
    <Navbar/>
        <div className='content'>    
            <div className='About'>
                <h1>About section</h1>
                <h2>This part goes through the features of the app</h2>
            </div>
        </div>
        </>
    )

}

export default Home;