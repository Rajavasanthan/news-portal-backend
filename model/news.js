const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var NewsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    createdAt:{
        type: new Date,
        default : Date.now
    },
    
   
});
var News = mongoose.model("News", UserSchema);

module.exports = {News}