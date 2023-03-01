const mongoose = require('mongoose');

const changelogSchema = new mongoose.Schema({
    user_id: {
        type: String,
    },
    comment: {
        type: String
    },
    timestamp: {
        type: Date
    }
})
module.exports = mongoose.model('Changelog', changelogSchema);