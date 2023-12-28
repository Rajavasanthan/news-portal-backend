const mongoose = require("mongoose");

var AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    firebaseId: String,
    role: {
        type: String,
        default: "admin",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
var Admin = mongoose.model("admin",AdminSchema)
module.exports = { Admin };
