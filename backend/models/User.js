const mongoose = require("mongoose");
// how to create a model
//Step 1 : requirements
//Step 2 : create a mongoose schema -- structure of a User model
//Step 3 : create a model

const User = new mongoose.Schema({
    
    email: {
        type: String,
        required : true,
    },
    password: {
        type: String,
        required: true,
        private: true,
    },

    
    // userName: {
    //     type: String,
    //     required: true,
    // },
    // likedSongs: {
    //     // we will change the datatype in future
    //     type: String,
    //     default:"",
    // },
    // likedPlaylists: {
    //     type: String,
    //     default: "",
    // },

    // subscribedArtists:{
    //     type:String,
    //     default: "",
    // },

});

const UserModel = mongoose.model("User", User);

module.exports=UserModel;

