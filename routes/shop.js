const path = require("path");

const express = require("express");

const router = express.Router();

//this middleware only for / or all with "/"
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html")); // this is same "../views/shop.html"
});

module.exports = router;
