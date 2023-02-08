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

  const handleLogout = () => {
		localStorage.removeItem("user");
		window.location.replace('/');
	};
  let user = false;
  let isAdmin;

    const userToken = localStorage.getItem("user");

  if(userToken !== null) {
    const userProfile = JSON.parse(userToken);
     isAdmin = userProfile.isAdmin;
     user = true;
    
  } 
  let allUser = isAdmin || user;
  
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
                    <AiIcons.AiOutlineLogin />
                    <span>Login</span>
                  </Link>
                </li>}
                <li className="nav-text">
                  <Link to='/'>
                    <AiIcons.AiFillHome />
                    <span>Home</span>
                  </Link>
                </li>
                {!isAdmin && user && <li className="nav-text">
                  <Link to='/outline-view'>
                    <AiIcons.AiOutlineFileSearch/>
                    <span>View Outlines</span>
                    
                    
                  </Link>
                </li>}
                {isAdmin && <li className="nav-text">
                  <Link to='/admin-view'>
                    <span>Assign Courses</span>
                  </Link>
                </li>}

                {allUser && <li className="nav-text" onClick={handleLogout}>
                  <Link to='/'>
                  <AiIcons.AiOutlineLogout />
                    <span >Logout</span>
                  </Link>
                </li>}



          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
