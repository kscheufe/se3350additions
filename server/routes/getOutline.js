const express = require("express"); // Importing express module
const router = express.Router(); // Creating router object
const Outline = require("../models/OutlineModel.js"); // Importing GAIndicator model

//function to get list of proposed outlines, called from 
/*
const getOutlines = async (req, res) => {
    console.log(req.params.name);//log the parameters, I want to be able to
    //find the outline for a spceific course as specified in app
    const courseName = req.params.course;
    
    try {
            //find the most recent Outline from this course
        const outline = await Outline.findOne({course: courseName});//find the outline by courseName
        if (outline.status == "submitted")
        {
            //display document for reviewal
            //return the document file

            return res.send(outline);
        }
        else if (outline.status == "accepted")
        {
            //give print as pdf option
        }
        else if (outline.status == "rejected")
        {
            //if no outlines are available for reviewal,
            //print "no submitted outlines for this course"
            return res.status(400).send({error: `no new outlines for course: ${courseName} have been submitted for review`});
        }


    }
    catch (error){
        console.log("Error retrieving course outline for course : ", courseName);
    }
}

//get route to grab the course outline for a specified course
router.route("/:name").get(getOutlines);
*/

//*
// Controller function to get outlines. I'm thinking this will likely get all the outlines in the system
const getOutlines = (req, res) => {
    // Finding all outlines
    Outline.find((err, outlines) => {
      if (err) {
        // If there's an error, return a 500 error response
        return res.status(500).json({ error: "Error getting outlines from database" });
      }
      // If successful, return the courses as a JSON response
      //console.log("searched for outlines - getOutline.js, this does work and sends the whole sfdt document")
      //console.log(outlines[outlines.length-1]);
      return res.json(outlines);
    });
  };
  
  // Setting the route for getting courses
  router.route("/").get(getOutlines);
  
//*/  


//export the router to use in other files
module.exports = router;




