import React from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import OutlineEditor from '../../pages/Outline'

function DisplayEditor({courses}) {
  let params = useParams();

  //function to match params id to courses array
  courses.forEach(course =>{
    if(params.id === course){
        //console.log(course)
    }
  })

  return (
    <div>
        <Navbar/>
      <h1>Edit {params.id} outline</h1>
      <div className = "editor">
        <OutlineEditor/>
      </div>
      
    </div>
  );
}

export default DisplayEditor;