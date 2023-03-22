import React, { useState, useMemo } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb"

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
    window.location.reload();
	};
  let user = false;
  let isAdmin;

  const userToken = localStorage.getItem("user");

  if(userToken !== null) {
    const userProfile = JSON.parse(userToken);
     isAdmin = userProfile[0].isAdmin;
     console.log(isAdmin);
     user = true;
    
  } 
  let allUser = isAdmin || user;
  let instructor = (!isAdmin && user)
  
  const iconColor = useMemo(()=>({color:"#FFF"}), [])
  
  return (
    <>
      <IconContext.Provider value={iconColor}>
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
                {instructor && <li className="nav-text">
                  <Link to='/outline-view'>
                    <AiIcons.AiOutlineFileSearch/>
                    <span>View Outlines</span>
                  </Link>
                </li>}
                {isAdmin && <li className="nav-text">
                  <Link to='/admin-view'>
                    <TbIcons.TbBookUpload/>
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
