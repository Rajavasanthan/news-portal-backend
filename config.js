var config = module.exports;
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var PRODUCTION = process.env.NODE_ENV === "production";
config.saltRoud = 10;
config.express = {
  port: process.env.PORT || 3000,
  ip: "127.0.0.1",
};

if (PRODUCTION) {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} else {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}
