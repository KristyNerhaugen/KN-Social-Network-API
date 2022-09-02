// require express
const router = require("express").Router();

// import routes from thought-controller
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

//implement into routes

// /api/thoughts routes
router.route("/").get(getAllThought).post(createThought);

// /api/thoughts/thoughtid routes
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/thoughts/reactions route
router.route("/:id/reactions").post(addReaction);

// /api/thoughts/thoughtid/reactions/reactionId route
router.route("/:id/reactions/:reactionId").delete(removeReaction);

module.exports = router;
