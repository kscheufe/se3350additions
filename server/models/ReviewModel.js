const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    id:String,
    comment:String
})

module.exports = mongoose.model('Reviews',ReviewSchema);