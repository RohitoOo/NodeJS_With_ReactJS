const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({

googleId : String ,
username: String


})

mongoose.model('users' , UserSchema);
