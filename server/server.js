require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ welcome: "Hello" });
});

app.use("/instructors", require("./routes/assignInstructor"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
