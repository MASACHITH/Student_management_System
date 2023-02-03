const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

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

const studentRouter = require("./routes/students.js");
app.use("/student",studentRouter);


//middleware
app.use(express.json());
app.use(morgan("common"));

app.listen(8070, () => {
  console.log("Backend server is running!");
});