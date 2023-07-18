const connectToMongo = require("./db");
const express = require("express"); // Move this line here
var cors = require("cors");

connectToMongo();
const app = express(); // Now initialize express after requiring it

const port = 5000;
app.use(cors());
app.use(express.json());

// Routing middleware for authentication-related routes
app.use("/api/auth", require("./routes/auth"));

// Routing middleware for notes-related routes
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`botenook backend listening on port http://127.0.0.1:${port}`);
});
