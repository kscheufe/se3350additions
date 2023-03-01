const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    id:Number,
    email:String,
    isAdmin:Boolean,
    assigned_courses:Array
})

module.exports = mongoose.model('User',UserSchema);