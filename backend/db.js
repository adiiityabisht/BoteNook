const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/botenook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to mongo successfully!");
  } catch (error) {
    console.error("Failed to connect to mongo", error);
  }
};

module.exports = connectToMongo;
