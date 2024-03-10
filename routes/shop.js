const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

//this middleware only for / or all with "/"
router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html")); // this is same "../views/shop.html"
});

module.exports = router;
