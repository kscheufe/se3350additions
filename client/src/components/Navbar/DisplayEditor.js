import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

function DisplayEditor({courses}) {
  let params = useParams();

  //function to match params id to courses array
  courses.forEach(course =>{
    if(params.id === course){
        console.log(course)
    }
  })

  return (
    <div>
        <Navbar/>
      <h1>Edit {params.id} outline</h1>
    </div>
  );
}

export default DisplayEditor;