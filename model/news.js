const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    default: "free",
    enum: ["free", "paid"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
var News = mongoose.model("news", NewsSchema);

module.exports = { News };
