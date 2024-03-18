const mongoose = require("mongoose");

const mongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("mongo connected")
  } catch (error) {
    console.log("Mongo can't be connected",error.message)
  }
};

module.exports = mongoConnection;
 
