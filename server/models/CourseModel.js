const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  code: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Courses", courseSchema);
