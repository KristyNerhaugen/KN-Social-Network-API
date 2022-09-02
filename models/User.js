const { Schema, model } = require("mongoose");
// require date format file

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    // must match to a valid email address--Mongoose's matching validation
  },
  //thoughts: {},
  //friends: {},
});

// virtual friendCount retrieves the length of the user's friends array
UserSchema.virtual("friendCount").get(function () {
  return this.friends.reduce(
    (total, friend) => total + friend.replies.length + 1,
    0
  );
});

// create the  model using the UserSchema
const User = model("User", UserSchema);

// export the User model
module.exports = User;
