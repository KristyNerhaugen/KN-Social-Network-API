// require express
const router = require("express").Router();

//import routes from user-controller
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// implement into routes
// api/user routes
router.route("/").get(getAllUser).post(createUser);

// api/user/:id routes
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// api/users/:userid/friends/:friendid
router.route("/:id/friends/:friendId").post(createFriend).delete(deleteFriend);

module.exports = router;
