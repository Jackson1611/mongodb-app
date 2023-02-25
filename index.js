const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
