const mongoose = require('mongoose');

const outlineSchema = new mongoose.Schema({
    course: {
        type: String
    },
    content: {
        type: String
    },
    timestamp: {
        type: Date
    }, 
    status: {
        type: String
    }
});
module.exports = mongoose.model('Outline', outlineSchema);