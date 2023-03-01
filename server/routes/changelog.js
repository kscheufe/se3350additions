const express =  require('express');
const Changelog = require('../models/changelogModel.js');

const router = express.Router();
 
const getChangeLog = async (req, res) => {
    let changelog;
    try {
        changelog = await Changelog.find().sort({last_edit: -1})

        res.send(changelog);
    } catch (err) {
        res.status(500).json({message:err.message})
    }

}

const addChange = async (req, res) => {
    let changes = req.body;
    console.log(changes)
    const newChange = new Changelog ({... changes, timestamp: new Date()});
    try {
        await newChange.save();
        res.status(201).json(newChange)
    } catch (err){
        res.status(400).json({message: err.message})
    }
}

router.get('/', getChangeLog);
router.post('/', addChange)

module.exports = router;