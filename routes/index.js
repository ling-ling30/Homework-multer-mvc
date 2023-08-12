const express = require("express");
const router = express.Router();
const moviesRouter = require("./movies");
const usersRouter = require("./users");
router.use("/api/movies", moviesRouter);
router.use("/api/users", usersRouter);

module.exports = router;
