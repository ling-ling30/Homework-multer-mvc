const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/moviesControllers");
const upload = require("../middleware/multer.js");

router
  .route("/")
  .get(MoviesController.findMany)
  .post(upload.single("photo"), MoviesController.create)
  .put(MoviesController.update)
  .delete(MoviesController.delete);

module.exports = router;
/*upload.single("image"),*/
