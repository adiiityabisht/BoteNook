const mongoose = require("mongoose"); // Importing Mongoose
const mongoURI = "mongodb://127.0.0.1:27017/botenook"; // MongoDB connection URI

const connectToMongo = async () => {
  try {
    // Attempt to establish a connection to MongoDB
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = connectToMongo;
