// require express
const router = require("express").Router();

//import routes from user-controller
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// implement into routes
// api/user routes
router.route("/").get(getAllUser).post(createUser);

// api/user/:id routes
router.route("/:id").get(getUseraById).put(updateUser).delete(deleteUser);

module.exports = router;
