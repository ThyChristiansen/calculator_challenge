
const express = require("express");
require('dotenv').config();

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));


// Routes

require("./routes/calculator.router")(app);

// Start the API server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

