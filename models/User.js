const { Schema, model } = require("mongoose");

// TO DO! require date format file

const UserSchema = new Schema(
  {
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
      // must match to a valid email address--used https://mongoosejs.com/docs/api.html#schema_Schema-indexes
      email: { type: String, required: true, unique: true },
      // if above doesn't work, try this code taken from from https://thewebdev.info/2022/03/16/how-to-validate-email-syntax-with-mongoose/
      // validate: [validateEmail, "Please fill a valid email address"],
      // match: [
      //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      //   "Please fill a valid email address",
      // ],
    },
    // thoughts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Thought",
    //   },
    // ],
    // friends: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     re: "User",
    //   },
    // ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // prevent virtuals from creating duplicate
    id: false,
  }
);

// virtual friendCount retrieves the length of the user's friends array
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create the  model using the UserSchema
const User = model("User", UserSchema);

// export the User model
module.exports = User;
