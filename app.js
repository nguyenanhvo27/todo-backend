const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// Import Creds
const mongo = require("./credentials/mongo");

// Imports for Routes
const todoRoutes = require("./routes/todo");

// Create an Express App
const app = express();

// Handle MongoDB Connection
mongoose
  .connect(process.env.URL_API, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((e) => {
    console.log(e);
  });

// Use body-parser to parse incoming reuests
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Use Cors to avoid annoying CORS Errors
app.use(cors());

// Handle Authentication If Any

// Send basic info about the API
// Set up API Routes
app.use("/api/v1/todo", todoRoutes);

module.exports = app;
