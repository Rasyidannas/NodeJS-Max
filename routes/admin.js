const path = require("path");

const express = require("express");

const router = express.Router();

//this middleware only for /add-product url
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

//this will only available for post and not get/put/patch/delete
router.post("/add-product", (req, res) => {
  console.log(req.body); //this will be output because body-parser
  res.redirect("/");
});

module.exports = router;
