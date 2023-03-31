const mongoose = require('mongoose');

const changelogSchema = new mongoose.Schema({
    user_id: {
        type: String,
    },
    attribute_1: {
        type: String
    },
    attribute_2: {
        type: String
    },
    attribute_3: {
        type: String
    },
    attribute_4: {
        type: String
    },
    timestamp: {
        type: Date
    }
})
module.exports = mongoose.model('Changelog', changelogSchema);