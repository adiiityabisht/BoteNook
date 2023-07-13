const connectToMongo = require("./db"); // Importing the function to connect to MongoDB

connectToMongo(); // Connecting to MongoDB

const express = require("express");
const app = express();
const port = 5000;

app.use(express.json()); // Middleware to parse JSON data in requests

// Routing middleware for authentication-related routes
app.use("/api/auth", require("./routes/auth"));

// Routing middleware for notes-related routes
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
