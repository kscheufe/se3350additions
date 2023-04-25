const express = require("express"); // Importing express module
const router = express.Router(); // Creating router object
const Outline = require("../models/OutlineModel.js"); // Importing User model

//function for an admin to accept or reject a course outline
const judgeOutline = async (req, res) => {

    const newStatus = req.params.newStatus;
    console.log('new status : ' + newStatus);

    try {
        //come back here and finish once front end for admin is updated
        
        //will need to get the outline reference??

        //update status to accepted if accepted
        //update status to rejected if rejected
    }
    catch (error){
        //if there's an error while setting the status, send a 500
        console.log("Error updating status of outline: ", error)
        return res.status(500).send({error: "error updating outline status"});
    }
}


// POST route to update outline status for an instructor
router.route("/:newStatus").post(judgeOutline);

// Exporting the router object for use in other files
module.exports = router;