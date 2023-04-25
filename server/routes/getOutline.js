const express = require("express"); // Importing express module
const router = express.Router(); // Creating router object
const Outline = require("../models/OutlineModel.js"); // Importing GAIndicator model

//function to get list of proposed outlines, called from 
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

            return res.send(outline)
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

//export the router to use in other files
module.exports = router;