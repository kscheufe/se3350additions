const mongoose = require('mongoose');

const GraduateAttributesSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    course: {
        type: String,
    },
    indicator: {
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
module.exports = mongoose.model('GAIndicator', GraduateAttributesSchema);