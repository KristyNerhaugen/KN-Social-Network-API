const { Schema, model } = require("mongoose");
// require date format file

const UserSchema = new Schema({
  username: {
    type: String,
    // add in unique
    required: true,
    trim: true,
  },
  email: {
    type: String,
    // add in unique
    required: true,
    // must match to a valid email address--Mongoose's matching validation
  },
  //thoughts: {},
  //friends: {},
});
