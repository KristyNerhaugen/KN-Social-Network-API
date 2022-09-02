const { Schema, model, Types } = require("mongoose");
// TO DO! require date format file
// const dateFormat = require('../utils/dateFormat');

// reaction schema subdocument schema
const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent thought _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      // 280 character maximum
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      // must be between 1 and 280 characters
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    // use ReactionSchema to validate data for a reaction
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// virtual reactionCount retrieves the length of the thought's reactions array
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// create the  model using the ThoughtSchema
const Thought = model("Thought", ThoughtSchema);

// export the Thought model
module.exports = Thought;
