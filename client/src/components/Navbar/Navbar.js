import React, { useState, useEffect } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING
import { Link } from "react-router-dom";

// STYLES
import "../../styles/Navbar.css";



export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  let user = false;

    const userToken = localStorage.getItem("user");

  if(userToken !== null) {
    const userProfile = JSON.parse(userToken);
     let isAdmin = userProfile.isAdmin;
     user = true;
    
  } 
  
  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
                {!user && <li className="nav-text">
                  <Link to='/login'>
                    <span>Login</span>
                  </Link>
                </li>}
                <li className="nav-text">
                  <Link to='/'>
                    <span>Home</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to='/outline-view'>
                    <span>View Outlines</span>
                  </Link>
                </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
