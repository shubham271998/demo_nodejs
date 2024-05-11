const express = require("express");
const bodyParser = require("body-parser");
const studentsRoutes = require("./routes/studentsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/students", studentsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
