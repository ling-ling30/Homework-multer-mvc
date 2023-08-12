const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const errorhandler = require("./middleware/errorhandler");
const router = require("./routes");

app.use(express.static("uploads"));
app.use(express.json());
app.use(router);
app.use(errorhandler);

app.listen(3000, () => {
  console.log("app listening on port 3000!");
});
