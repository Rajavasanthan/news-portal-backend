const mongoose = require("mongoose");

var SubscriptionSchema = new mongoose.Schema({
  name: String,
  price: Number,
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var Subscription = mongoose.model("Subscription", SubscriptionSchema);

module.exports = { Subscription };
