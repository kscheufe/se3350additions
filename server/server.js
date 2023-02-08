require("dotenv").config();
const express = require("express");
const app = express();

// built-in middleware for json
app.use(express.json());
const cors = require('cors');
app.use(cors());

// Routes
app.use("/api/instructors", require("./routes/assignInstructor"));
app.use("/api/login", require("./routes/login"));
app.use("/api/changelog", require("./routes/changelog"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
