const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')
const morgan = require("morgan");


dotenv.config();
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
//middleware
app.use(express.json());
app.use(morgan("common"));
app.use(cors)
const studentRouter = require("./routes/students");
app.use("/student",studentRouter);

app.listen(8070, () => {
  console.log("Backend server is running!");
});