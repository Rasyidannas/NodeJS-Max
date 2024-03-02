const express = require("express");

const router = express.Router();

//this middleware only for /add-product url
router.get("/add-product", (req, res, next) => {
  //   console.log("in another middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /> <button type="submit">Add Product</button></form>'
  );
});

//this will only available for post and not get/put/patch/delete
router.post("/product", (req, res) => {
  console.log(req.body); //this will be output because body-parser
  res.redirect("/");
});

module.exports = router;
