// express dependency
const express = require('express');
// Define the port
var PORT = process.env.PORT || 8000;
// Define express
var app = express();
app.use(express.static("public"));// Serve static content for the app from the "public" directory in the application directory.
app.use(express.urlencoded({ extended: true }));// Parse application body as JSON
app.use(express.json());
// Define Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes to give the server access to them.
var routes = require("./routes/api-routes.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });