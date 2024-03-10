const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

//this middleware only for /add-product url
router.get("/add-product", (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
});

//this will only available for post and not get/put/patch/delete
router.post("/add-product", (req, res) => {
  // console.log(req.body); //this will be output because body-parser
  products.push({ title: req.body.title });
  res.redirect("/");
});

//this will access by ebject
exports.routes = router;
exports.products = products;
