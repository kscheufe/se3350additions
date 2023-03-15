require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// built-in middleware for json
app.use(express.json());
const cors = require("cors");

app.use(
  cors(/* {
    origin: ["http://localhost:3000", "https://se3350-team-25.nn.r.appspot.com"],
  } */)
);

mongoose.connect("mongodb+srv://team25:3350@outline-manager.cxc38sw.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => console.log("Connected to Database"));

// Test
app.get("/", (req, res) => {
  res.send("Hello");
});

// Routes
app.use("/api/instructors", require("./routes/assignInstructor"));
app.use("/api/login", require("./routes/login"));
app.use("/api/changelog", require("./routes/changelog"));
app.use("/api/courses", require("./routes/getCourses"));
app.use("/api/getinstructors", require("./routes/getInstructors"));
app.use("/api/review", require("./routes/review"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
