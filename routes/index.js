const router = require("express").Router();
// import routes
const apiRoutes = require("./api");

// add /api to routes
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("404 Error!");
});

module.exports = router;
