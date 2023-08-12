const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const UsersController = require("../controllers/usersControllers");

const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(UsersController.findMany)
  .post(UsersController.create)
  .put(UsersController.update)
  .delete(UsersController.delete);

module.exports = router;
