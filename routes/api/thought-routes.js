// require express
const router = require("express").Router();

// import routes from thought-controller
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

//implement into routes
// /api/thoughts/userid routes
router.route("/:userId").post(addThought);

// /api/thoughts/userid/thoughtid routes
router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

// /api/thoughts/userid/thoughtid/reactionid
router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
